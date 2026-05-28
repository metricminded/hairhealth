import { useState, useRef, useEffect } from "react";
import { CompanyAgent } from "../lib/agent/agentController";
import "./AgentAssistant.css";

interface ChatMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export function AgentAssistant() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [agent, setAgent] = useState<CompanyAgent | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const anthropicKey = import.meta.env.VITE_ANTHROPIC_API_KEY;
    const landbotKey = import.meta.env.VITE_LANDBOT_API_KEY;

    if (!anthropicKey) {
      console.error("VITE_ANTHROPIC_API_KEY not found in environment");
      return;
    }

    setAgent(new CompanyAgent(anthropicKey, landbotKey));
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || !agent || loading) return;

    const userMessage = input.trim();
    setInput("");

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: "user",
      content: userMessage,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    try {
      const response = await agent.chat(userMessage);

      const assistantMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: response,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMsg]);
    } catch (error) {
      console.error("Agent error:", error);
      const errorMsg: ChatMessage = {
        id: (Date.now() + 2).toString(),
        role: "assistant",
        content: `Sorry, I encountered an error: ${error instanceof Error ? error.message : "Unknown error"}`,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setLoading(false);
    }
  };

  const exampleQueries = [
    "What's our company status? Give me a summary of all teams.",
    "Show me all marketing campaigns and their budgets",
    "Which sales deals are we closest to closing?",
    "List all overdue tasks across the company",
    "Create a new project: Q3 Product Launch for the Marketing team",
    "What's the marketing team working on right now?",
  ];

  return (
    <div className="agent-assistant">
      <div className="agent-header">
        <h1>🤖 Company Agent Assistant</h1>
        <p>Ask questions about your company data, teams, and projects</p>
      </div>

      <div className="agent-container">
        <div className="chat-area">
          {messages.length === 0 ? (
            <div className="welcome-section">
              <h2>Welcome to Company Agent</h2>
              <p>Ask me questions about your company data:</p>
              <div className="example-queries">
                {exampleQueries.map((query, idx) => (
                  <button
                    key={idx}
                    className="example-btn"
                    onClick={() => {
                      setInput(query);
                    }}
                  >
                    {query}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="messages-list">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`message message-${msg.role}`}
                >
                  <div className="message-avatar">
                    {msg.role === "user" ? "👤" : "🤖"}
                  </div>
                  <div className="message-content">
                    <div className="message-text">{msg.content}</div>
                    <div className="message-time">
                      {msg.timestamp.toLocaleTimeString()}
                    </div>
                  </div>
                </div>
              ))}
              {loading && (
                <div className="message message-assistant">
                  <div className="message-avatar">🤖</div>
                  <div className="message-content">
                    <div className="typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          )}
        </div>

        <form className="input-area" onSubmit={handleSendMessage}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about your company, teams, projects, deals..."
            disabled={loading || !agent}
            className="input-field"
          />
          <button
            type="submit"
            disabled={loading || !agent || !input.trim()}
            className="send-btn"
          >
            {loading ? "Thinking..." : "Send"}
          </button>
        </form>
      </div>
    </div>
  );
}
