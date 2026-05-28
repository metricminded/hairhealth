import fs from 'fs';
import { parse } from 'csv-parse/sync';

const fileContent = fs.readFileSync('./customers.csv', 'utf-8');
const records = parse(fileContent, { columns: true, skip_empty_lines: true });

console.log('\n╔══════════════════════════════════════════════════════════════╗');
console.log('║                    CUSTOMER DATA ANALYSIS                    ║');
console.log('║                      4,566 Landbot Leads                     ║');
console.log('╚══════════════════════════════════════════════════════════════╝\n');

// ============ BASIC STATS ============
console.log('📊 BASIC STATISTICS\n');
const total = records.length;
const withEmail = records.filter(r => r['@email'] && r['@email'].trim()).length;
const withPhone = records.filter(r => r['@phone'] && r['@phone'].trim()).length;
const noEmail = total - withEmail;

console.log(`Total Leads:                ${total}`);
console.log(`With Email:                 ${withEmail} (${((withEmail/total)*100).toFixed(1)}%)`);
console.log(`Without Email:              ${noEmail} (${((noEmail/total)*100).toFixed(1)}%)`);
console.log(`With Phone:                 ${withPhone} (${((withPhone/total)*100).toFixed(1)}%)`);
console.log(`Average Lead Quality:       ${((withEmail/total)*100).toFixed(1)}%\n`);

// ============ GEOGRAPHIC BREAKDOWN ============
console.log('🌍 GEOGRAPHIC DISTRIBUTION\n');
const byCountry = {};
records.forEach(r => {
  const country = r['@country'] || 'Unknown';
  byCountry[country] = (byCountry[country] || 0) + 1;
});

const sortedCountries = Object.entries(byCountry)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 15);

sortedCountries.forEach(([country, count]) => {
  const pct = ((count / total) * 100).toFixed(1);
  const bar = '█'.repeat(Math.ceil(count / 50));
  console.log(`${country.padEnd(25)} │ ${count.toString().padStart(4)} (${pct.padStart(5)}%) ${bar}`);
});

const otherCount = total - sortedCountries.reduce((sum, [, count]) => sum + count, 0);
if (otherCount > 0) {
  console.log(`Other countries            │ ${otherCount.toString().padStart(4)} (${((otherCount/total)*100).toFixed(1).padStart(5)}%)`);
}
console.log('');

// ============ DEMOGRAPHICS ============
console.log('👥 DEMOGRAPHICS\n');
const byGender = {};
const byAge = {};
records.forEach(r => {
  const gender = r['@gender'] || 'Not specified';
  const age = r['@age'] || 'Not specified';
  byGender[gender] = (byGender[gender] || 0) + 1;
  byAge[age] = (byAge[age] || 0) + 1;
});

console.log('Gender Distribution:');
Object.entries(byGender)
  .sort((a, b) => b[1] - a[1])
  .forEach(([gender, count]) => {
    console.log(`  ${gender.padEnd(20)} ${count.toString().padStart(5)} (${((count/total)*100).toFixed(1)}%)`);
  });

const ageRange = Object.keys(byAge).filter(a => a && a !== 'Not specified');
if (ageRange.length > 0) {
  const avgAge = ageRange
    .map(a => parseInt(a))
    .filter(a => !isNaN(a))
    .reduce((sum, a) => sum + a, 0) / ageRange.filter(a => !isNaN(parseInt(a))).length;
  console.log(`\nAverage Age:               ${avgAge.toFixed(1)} years`);
}
console.log('');

// ============ HAIR LOSS SEVERITY ============
console.log('💇 HAIR LOSS SEVERITY\n');
const byGrade = {};
records.forEach(r => {
  const grade = r['@grade'] || 'Not specified';
  byGrade[grade] = (byGrade[grade] || 0) + 1;
});

const gradeOrder = ['', '1', '2', '3', '4', '5', '6', '7', 'Not specified'];
gradeOrder.forEach(grade => {
  if (byGrade[grade]) {
    const label = grade === '' ? 'Empty' : `Grade ${grade}`;
    console.log(`  ${label.padEnd(20)} ${byGrade[grade].toString().padStart(5)} (${((byGrade[grade]/total)*100).toFixed(1)}%)`);
  }
});
console.log('');

// ============ TREATMENT PREFERENCES ============
console.log('💊 TREATMENT PREFERENCES\n');
const byTreatment = {};
records.forEach(r => {
  const treatment = r['@question_4'] || 'Not specified';
  byTreatment[treatment] = (byTreatment[treatment] || 0) + 1;
});

Object.entries(byTreatment)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 10)
  .forEach(([treatment, count]) => {
    console.log(`  ${treatment.padEnd(30)} ${count.toString().padStart(4)} (${((count/total)*100).toFixed(1)}%)`);
  });
console.log('');

// ============ URGENCY / TIMELINE ============
console.log('⏱️ TIMELINE TO ACTION\n');
const byTimeline = {};
records.forEach(r => {
  const timeline = r['@question_5'] || 'Not specified';
  byTimeline[timeline] = (byTimeline[timeline] || 0) + 1;
});

Object.entries(byTimeline)
  .sort((a, b) => b[1] - a[1])
  .forEach(([timeline, count]) => {
    console.log(`  ${timeline.padEnd(30)} ${count.toString().padStart(4)} (${((count/total)*100).toFixed(1)}%)`);
  });
console.log('');

// ============ LEAD QUALITY SCORING ============
console.log('🎯 LEAD QUALITY SCORING\n');
const highQuality = records.filter(r =>
  r['@email'] && r['@email'].trim() &&
  r['@phone'] && r['@phone'].trim() &&
  r['@grade'] && parseInt(r['@grade']) >= 3
).length;

const mediumQuality = records.filter(r =>
  r['@email'] && r['@email'].trim() &&
  (r['@grade'] === '' || parseInt(r['@grade']) < 3)
).length;

const lowQuality = total - highQuality - mediumQuality;

console.log(`High Quality Leads:        ${highQuality} (${((highQuality/total)*100).toFixed(1)}%)`);
console.log(`  • Has email`);
console.log(`  • Has phone`);
console.log(`  • Grade 3 or higher\n`);

console.log(`Medium Quality Leads:      ${mediumQuality} (${((mediumQuality/total)*100).toFixed(1)}%)`);
console.log(`  • Has email`);
console.log(`  • Lower severity grade\n`);

console.log(`Low Quality Leads:         ${lowQuality} (${((lowQuality/total)*100).toFixed(1)}%)`);
console.log(`  • No email captured\n`);

// ============ HAIR LOSS DURATION ============
console.log('📅 HAIR LOSS DURATION\n');
const byDuration = {};
records.forEach(r => {
  const duration = r['@question_1'] || 'Not specified';
  byDuration[duration] = (byDuration[duration] || 0) + 1;
});

Object.entries(byDuration)
  .sort((a, b) => b[1] - a[1])
  .forEach(([duration, count]) => {
    console.log(`  ${duration.padEnd(30)} ${count.toString().padStart(4)} (${((count/total)*100).toFixed(1)}%)`);
  });
console.log('');

// ============ OPT-IN RATE ============
console.log('📧 OPT-IN / CONSENT\n');
const optIn = records.filter(r => r['opt_in'] === 'True' || r['opt_in'] === 'true').length;
const optOut = total - optIn;
console.log(`Opted In:                  ${optIn} (${((optIn/total)*100).toFixed(1)}%)`);
console.log(`Opted Out:                 ${optOut} (${((optOut/total)*100).toFixed(1)}%)`);
console.log('');

// ============ TOP LOCATIONS ============
console.log('📍 TOP CITIES/LOCATIONS\n');
const byLocation = {};
records.forEach(r => {
  const loc = r['@country'] || 'Unknown';
  byLocation[loc] = (byLocation[loc] || 0) + 1;
});

Object.entries(byLocation)
  .sort((a, b) => b[1] - a[1])
  .slice(0, 10)
  .forEach(([location, count]) => {
    console.log(`  ${location.padEnd(35)} ${count.toString().padStart(4)} leads`);
  });
console.log('');

// ============ KEY INSIGHTS ============
console.log('🔍 KEY INSIGHTS\n');
console.log(`1. Email Capture Rate: ${((withEmail/total)*100).toFixed(1)}% - ${withEmail/total > 0.5 ? 'Good ✓' : 'Needs improvement'}`);
console.log(`   → ${withEmail} leads have emails for follow-up\n`);

console.log(`2. Lead Concentration: ${sortedCountries[0][0]} dominates with ${sortedCountries[0][1]} leads (${((sortedCountries[0][1]/total)*100).toFixed(1)}%)`);
console.log(`   → ${sortedCountries.slice(0, 5).reduce((sum, [, count]) => sum + count, 0)} leads from top 5 countries\n`);

const urgentLeads = records.filter(r =>
  r['@question_5'] === 'As soon as possible' ||
  r['@question_5'] === 'In next 3 months'
).length;
console.log(`3. Urgent Prospects: ${urgentLeads} leads (${((urgentLeads/total)*100).toFixed(1)}%)`);
console.log(`   → Ready to schedule within 3 months\n`);

const severeGrade = records.filter(r => r['@grade'] && parseInt(r['@grade']) >= 5).length;
console.log(`4. Severe Cases (Grade 5+): ${severeGrade} leads (${((severeGrade/total)*100).toFixed(1)}%)`);
console.log(`   → Higher conversion potential\n`);

const bookingRequests = records.filter(r => r['@cost'] && r['@cost'].includes('Consult')).length;
console.log(`5. Booking Requests: ${bookingRequests} leads (${((bookingRequests/total)*100).toFixed(1)}%)`);
console.log(`   → Already interested in consultation\n`);

// ============ RECOMMENDATIONS ============
console.log('💡 RECOMMENDATIONS\n');
console.log(`1. Focus on High Quality Leads (${highQuality} leads)`);
console.log(`   → Prioritize email-verified leads with contact info\n`);
console.log(`2. Target Urgent Prospects (${urgentLeads} leads)`);
console.log(`   → Follow up with leads planning action within 3 months\n`);
console.log(`3. International Strategy`);
console.log(`   → ${sortedCountries[0][0]} is main market, localize content accordingly\n`);
console.log(`4. Re-engage No-Email Leads (${noEmail} leads)`);
console.log(`   → Consider retargeting or additional consent requests\n`);
console.log(`5. Severity-Based Segmentation`);
console.log(`   → ${severeGrade} leads with severe hair loss - premium treatment offers\n`);

console.log('═══════════════════════════════════════════════════════════════\n');
