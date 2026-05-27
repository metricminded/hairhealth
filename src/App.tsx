import { useState, useEffect } from 'react';
import { supabaseService } from './lib/supabaseService';
import './App.css';

interface Item {
  id: number;
  name: string;
  description?: string;
  created_at?: string;
}

function App() {
  const [items, setItems] = useState<Item[]>([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadItems();
  }, []);

  const loadItems = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await supabaseService.getAll<Item>('items', {
        orderBy: 'created_at',
        ascending: false,
      });
      setItems(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load items');
      console.error('Load error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    try {
      setError(null);
      const newItem = await supabaseService.insert<Item>('items', {
        name: name.trim(),
        description: description.trim() || undefined,
      } as any);

      setItems([newItem, ...items]);
      setName('');
      setDescription('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add item');
      console.error('Add error:', err);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      setError(null);
      await supabaseService.delete('items', id);
      setItems(items.filter(item => item.id !== id));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to delete item');
      console.error('Delete error:', err);
    }
  };

  return (
    <div className="App">
      <h1>Supabase CRUD App</h1>

      {error && <div className="error">{error}</div>}

      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description (optional)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button type="submit">Add Item</button>
      </form>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <div>
                <strong>{item.name}</strong>
                {item.description && <p>{item.description}</p>}
              </div>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
