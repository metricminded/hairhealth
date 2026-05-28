import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

const doc = new PDFDocument({
  size: 'A4',
  margin: 40,
  bufferPages: true
});

const filename = 'Customer_Analytics_Report.pdf';
const stream = fs.createWriteStream(filename);

doc.pipe(stream);

// Helper functions
function addTitle(text, size = 24) {
  doc
    .fontSize(size)
    .font('Helvetica-Bold')
    .text(text, { align: 'center' })
    .moveDown(0.5);
}

function addSubtitle(text) {
  doc
    .fontSize(14)
    .font('Helvetica-Bold')
    .text(text)
    .moveDown(0.3);
}

function addText(text, size = 11, align = 'left') {
  doc
    .fontSize(size)
    .font('Helvetica')
    .text(text, { align })
    .moveDown(0.2);
}

function addLine() {
  doc
    .moveTo(40, doc.y)
    .lineTo(555, doc.y)
    .stroke('#cccccc')
    .moveDown(0.5);
}

function addMetricBox(title, value, subtext, color = '#667eea') {
  const y = doc.y;

  doc
    .rect(40, y, 125, 80)
    .stroke('#e0e0e0');

  doc
    .fontSize(12)
    .font('Helvetica-Bold')
    .fillColor(color)
    .text(title, 50, y + 8, { width: 105 });

  doc
    .fontSize(18)
    .font('Helvetica-Bold')
    .fillColor('#1a202c')
    .text(value, 50, y + 28, { width: 105 });

  doc
    .fontSize(9)
    .font('Helvetica')
    .fillColor('#718096')
    .text(subtext, 50, y + 52, { width: 105 });

  return y + 90;
}

// ===== PAGE 1: COVER & EXECUTIVE SUMMARY =====
addTitle('📊 Customer Analytics Report', 28);
addText('4,566 Landbot Leads - Comprehensive Analysis', 16, 'center');
doc.moveDown(0.3);
addText(`Generated: ${new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}`, 11, 'center');
doc.moveDown(2);

addSubtitle('EXECUTIVE SUMMARY');
addLine();

addText('This report provides a comprehensive analysis of 4,566 customer leads captured through Landbot.', 11);
addText('The data reveals significant opportunities for revenue growth and customer engagement.');
doc.moveDown(0.5);

// Metric boxes
let yPos = doc.y;
doc.fontSize(11).font('Helvetica-Bold').text('KEY METRICS:', 40, yPos);
doc.moveDown(0.3);

yPos = doc.y;
yPos = addMetricBox('Total Leads', '4,566', 'Complete dataset', '#667eea');
doc.y = yPos - 90;
doc.x = 175;
yPos = addMetricBox('With Email', '1,075', '23.5% captured', '#f093fb');

doc.y = yPos - 90;
doc.x = 310;
yPos = addMetricBox('High Quality', '436', '9.5% ready', '#4ade80');

doc.y = yPos - 90;
doc.x = 445;
addMetricBox('Urgent', '460', '10.1% action soon', '#fb923c');

doc.y = yPos + 20;

doc.moveDown(1);
addSubtitle('CRITICAL FINDINGS');
addLine();

const findings = [
  '• India dominates with 93.3% of all leads - localization is critical',
  '• 76.5% of leads missing email addresses - major re-engagement opportunity',
  '• 436 leads ready to convert NOW (email + phone + severity 3+)',
  '• 812 leads ready within 3 months - immediate sales pipeline',
  '• ₹121.5M - ₹211.5M revenue potential based on conversion rates',
  '• 917 leads already requesting bookings - pre-qualified prospects'
];

findings.forEach(finding => addText(finding, 11));

doc.addPage();

// ===== PAGE 2: GEOGRAPHIC ANALYSIS =====
addTitle('Geographic Analysis', 20);
addLine();
doc.moveDown(0.3);

addSubtitle('Top 5 Countries');
addText('Lead Distribution by Geographic Location', 10);
doc.moveDown(0.5);

const countries = [
  { name: 'India', value: 4258, pct: 93.3 },
  { name: 'UAE', value: 59, pct: 1.3 },
  { name: 'USA', value: 33, pct: 0.7 },
  { name: 'UK', value: 31, pct: 0.7 },
  { name: 'Australia', value: 30, pct: 0.7 }
];

let y = doc.y;
doc.fontSize(10).font('Helvetica-Bold');
doc.text('Country', 50, y);
doc.text('Count', 250, y);
doc.text('Percentage', 350, y);
doc.text('Distribution', 450, y);
doc.moveDown(0.4);

doc.fontSize(10).font('Helvetica');
countries.forEach((country, idx) => {
  const y = doc.y;
  const barWidth = country.pct * 2;

  doc.text(country.name, 50, y);
  doc.text(country.value.toString(), 250, y);
  doc.text(`${country.pct}%`, 350, y);

  doc
    .rect(450, y + 2, barWidth, 12)
    .fill('#667eea');

  doc.moveDown(0.5);
});

doc.moveDown(0.5);
addLine();

addSubtitle('Key Insight');
addText(
  '🎯 India represents 93.3% of all leads and should be the primary market focus. ' +
  'Localization strategy including Hindi language support and INR-based pricing is essential for success. ' +
  'The top 5 countries represent 96.6% of the customer base, indicating a highly concentrated market.',
  11
);

doc.moveDown(1);
addSubtitle('Strategic Recommendations');
const recommendations = [
  '1. Create India-specific marketing campaigns and content',
  '2. Implement Hindi language support in customer communications',
  '3. Price services in INR with graft-based models',
  '4. Partner with local influencers and clinics in India',
  '5. Develop region-specific testimonials from Indian patients'
];
recommendations.forEach(rec => addText(rec, 11));

doc.addPage();

// ===== PAGE 3: LEAD QUALITY ANALYSIS =====
addTitle('Lead Quality Assessment', 20);
addLine();
doc.moveDown(0.3);

addSubtitle('Lead Quality Distribution');
addText('Classification based on available contact info and severity grade', 10);
doc.moveDown(0.5);

const qualities = [
  { type: 'High Quality', count: 436, pct: 9.5, criteria: 'Email + Phone + Severity 3+', color: '#4ade80' },
  { type: 'Medium Quality', count: 639, pct: 14.0, criteria: 'Email + Any severity', color: '#fbbf24' },
  { type: 'Low Quality', count: 3491, pct: 76.5, criteria: 'Missing email', color: '#f87171' }
];

qualities.forEach((quality, idx) => {
  const y = doc.y;
  const boxWidth = (quality.pct / 100) * 300;

  doc
    .fontSize(11)
    .font('Helvetica-Bold')
    .text(`${quality.type} (${quality.count} leads - ${quality.pct}%)`, 50, y);

  doc
    .rect(50, y + 20, boxWidth, 30)
    .fill(quality.color);

  doc
    .fontSize(10)
    .font('Helvetica')
    .fillColor('#000000')
    .text(quality.criteria, 50, y + 60);

  doc.moveDown(1.5);
});

doc.moveDown(0.5);
addLine();

addSubtitle('Email Capture Rate: 23.5% ⚠️');
addText('✅ 1,075 leads WITH email - can be contacted directly', 11);
addText('❌ 3,491 leads WITHOUT email - limited reachability', 11);
doc.moveDown(0.3);
addText(
  '⚡ ACTION: Launch email opt-in campaign to increase capture rate from 23.5% to 50%+ by offering ' +
  'free hair analysis assessment. This is critical for lead nurturing.',
  11
);

doc.moveDown(1);
addSubtitle('Lead Segmentation Strategy');
const segments = [
  '1. HIGH PRIORITY (436 leads): Email + Phone + Severity 3+',
  '   → Action: Immediate sales follow-up (same-day contact)',
  '   → Expected Conversion: 20-30% (87-131 conversions)',
  '',
  '2. MEDIUM PRIORITY (639 leads): Email captured + Any severity',
  '   → Action: Lead nurturing email sequences',
  '   → Expected Conversion: 10-15% (64-96 conversions)',
  '',
  '3. LOW PRIORITY (3,491 leads): No email captured',
  '   → Action: Re-engagement & retargeting campaigns',
  '   → Expected Conversion: 2-5% (70-175 conversions)'
];
segments.forEach(seg => addText(seg, 10));

doc.addPage();

// ===== PAGE 4: TIMELINE & DEMOGRAPHICS =====
addTitle('Timeline & Demographics', 20);
addLine();
doc.moveDown(0.3);

addSubtitle('Timeline to Action');
addText('When do leads want to take action?', 10);
doc.moveDown(0.5);

const timelines = [
  { timeline: 'As soon as possible', count: 460, pct: 10.1 },
  { timeline: 'In next 3 months', count: 352, pct: 7.7 },
  { timeline: 'In next 12 months', count: 131, pct: 2.9 },
  { timeline: 'I only want info', count: 289, pct: 6.3 },
  { timeline: 'Not specified', count: 3334, pct: 73.0 }
];

timelines.forEach(t => {
  const barWidth = t.pct * 2;
  const y = doc.y;

  doc.fontSize(10).font('Helvetica').text(t.timeline, 50, y);
  doc.text(`${t.count} (${t.pct}%)`, 400, y);

  doc
    .rect(50, y + 18, barWidth, 10)
    .fill('#667eea');

  doc.moveDown(0.6);
});

doc.moveDown(0.5);
addText('🔥 URGENT PROSPECTS (≤3 months): 812 leads (17.8%) - Ready for immediate outreach', 11);

doc.moveDown(1);
addSubtitle('Demographics');
addText('Customer composition by gender', 10);
doc.moveDown(0.5);

const genders = [
  { gender: 'Male', count: 2164, pct: 47.4 },
  { gender: 'Female', count: 513, pct: 11.2 },
  { gender: 'Not Specified', count: 1889, pct: 41.4 }
];

genders.forEach(g => {
  const barWidth = g.pct * 2;
  const y = doc.y;

  doc.fontSize(10).font('Helvetica').text(g.gender, 50, y);
  doc.text(`${g.count} (${g.pct}%)`, 400, y);

  doc
    .rect(50, y + 18, barWidth, 10)
    .fill('#a78bfa');

  doc.moveDown(0.6);
});

doc.moveDown(0.5);
addText('📊 Key Insight: Males comprise 47.4% of the customer base. Tailor messaging and testimonials accordingly.', 11);

doc.addPage();

// ===== PAGE 5: TREATMENT & REVENUE =====
addTitle('Treatment Preferences & Revenue', 20);
addLine();
doc.moveDown(0.3);

addSubtitle('Treatment Preferences');
addText('What treatments are customers interested in?', 10);
doc.moveDown(0.5);

const treatments = [
  { name: 'Not Specified', count: 3323, pct: 72.8 },
  { name: 'No Treatments', count: 531, pct: 11.6 },
  { name: 'Minoxidil', count: 238, pct: 5.2 },
  { name: 'PRP Treatment', count: 205, pct: 4.5 },
  { name: 'Hair Transplant', count: 205, pct: 4.5 }
];

treatments.forEach(t => {
  const barWidth = t.pct * 1.5;
  const y = doc.y;

  doc.fontSize(10).font('Helvetica').text(t.name, 50, y);
  doc.text(`${t.count}`, 400, y);

  doc
    .rect(50, y + 18, barWidth, 10)
    .fill('#06b6d4');

  doc.moveDown(0.6);
});

doc.moveDown(1);
addSubtitle('Revenue Projections');

// Conservative scenario
doc.fontSize(11).font('Helvetica-Bold').text('CONSERVATIVE (5% conversion rate)', 50);
doc.fontSize(13).font('Helvetica-Bold').fillColor('#3b82f6').text('₹121.5M Potential Revenue');
doc.fillColor('#000000');
doc.fontSize(10).font('Helvetica')
  .text('243 total conversions', 50)
  .text('• High Quality: 109 conversions (25% of 436)', 60)
  .text('• Medium Quality: 64 conversions (10% of 639)', 60)
  .text('• Low Quality: 70 conversions (2% of 3,491)', 60);

doc.moveDown(1);

// Optimistic scenario
doc.fontSize(11).font('Helvetica-Bold').text('OPTIMISTIC (15% conversion rate)', 50);
doc.fontSize(13).font('Helvetica-Bold').fillColor('#10b981').text('₹211.5M Potential Revenue');
doc.fillColor('#000000');
doc.fontSize(10).font('Helvetica')
  .text('423 total conversions', 50)
  .text('• High Quality: 152 conversions (35% of 436)', 60)
  .text('• Medium Quality: 96 conversions (15% of 639)', 60)
  .text('• Low Quality: 175 conversions (5% of 3,491)', 60);

doc.addPage();

// ===== PAGE 6: ACTION PLAN =====
addTitle('Recommended Action Plan', 20);
addLine();
doc.moveDown(0.5);

const phases = [
  {
    phase: '🔥 IMMEDIATE (Next 7 Days)',
    actions: [
      'Email + Phone the 436 high-quality leads',
      'Expected: 87-131 conversions',
      'Use CRM automation for follow-up',
      'Owner: Sales team'
    ]
  },
  {
    phase: '📧 SHORT-TERM (Next 30 Days)',
    actions: [
      'Create 5 email sequences:',
      '  1. Urgent buyers (460 leads) - Action-focused',
      '  2. Info seekers (289 leads) - Educational',
      '  3. Grade 5+ (242 leads) - Premium offers',
      '  4. Booking requests (917 leads) - Appointment focus',
      '  5. No email (3,491 leads) - Retargeting ads',
      'Owner: Marketing team'
    ]
  },
  {
    phase: '💼 MEDIUM-TERM (Next 90 Days)',
    actions: [
      'Email opt-in campaign for 3,491 no-email leads',
      'Offer: Free hair analysis + severity assessment',
      'Target: Add 500+ emails (50% total capture)',
      'Owner: Growth team'
    ]
  },
  {
    phase: '🌍 LONG-TERM (Next 6 Months)',
    actions: [
      'Create India-specific content strategy',
      'Language: Hindi language support',
      'Pricing: INR quotes with graft-based model',
      'Marketing: Testimonials from Indian patients',
      'Owner: Strategy team'
    ]
  }
];

phases.forEach(({ phase, actions }) => {
  addSubtitle(phase);
  actions.forEach(action => addText(action, 10));
  doc.moveDown(0.5);
});

doc.addPage();

// ===== PAGE 7: SUMMARY & CONTACT =====
addTitle('Summary & Next Steps', 20);
addLine();
doc.moveDown(0.5);

addSubtitle('Key Metrics Overview');
const summary = [
  `Total Leads: 4,566`,
  `Email Capture Rate: 23.5% (1,075 leads)`,
  `High-Quality Leads: 436 (9.5%)`,
  `Urgent Prospects (≤3 months): 812 (17.8%)`,
  `Severe Cases (Grade 5+): 242 (5.3%)`,
  `Booking Requests: 917 (20.1%)`,
  ``,
  `Primary Market: India (93.3% of leads)`,
  `Male Demographic: 47.4% of leads`,
  ``,
  `Revenue Potential:`,
  `  Conservative: ₹121.5M (243 conversions @ 5%)`,
  `  Optimistic: ₹211.5M (423 conversions @ 15%)`
];
summary.forEach(line => addText(line, 11));

doc.moveDown(1);
addSubtitle('Critical Success Factors');
const factors = [
  '1. Email Collection - Increase from 23.5% to 50%+ by Q2',
  '2. Segment Tracking - Build tags & track conversion by segment',
  '3. India Localization - Language, pricing, testimonials',
  '4. Data Quality - Implement auto-scoring for severity',
  '5. Consent Workflow - Achieve 100% opt-in for compliance'
];
factors.forEach(factor => addText(factor, 11));

doc.moveDown(1);
addText('📞 For questions or to discuss implementation, contact the Growth team.', 11);
addText(`Report Generated: ${new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })}`, 10);

// Finalize PDF
doc.end();

stream.on('finish', () => {
  console.log('\n✅ PDF Report Generated Successfully!');
  console.log(`📄 File: ${filename}`);
  console.log(`📊 Pages: 7`);
  console.log(`💾 Size: ${(fs.statSync(filename).size / 1024).toFixed(2)} KB`);
  console.log('\n🎉 Ready to download and share!');
});

stream.on('error', (err) => {
  console.error('❌ Error creating PDF:', err);
});
