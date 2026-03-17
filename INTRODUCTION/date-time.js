// Create Date object (current date & time)
let now = new Date();

console.log("=== Date & Time Information ===");

// Full date and time
console.log("Current Date & Time:", now);

// Date components
console.log("Year:", now.getFullYear());
console.log("Month (0-11):", now.getMonth()); // January = 0
console.log("Month (Actual):", now.getMonth() + 1);
console.log("Date:", now.getDate());
console.log("Day (0-6):", now.getDay()); // Sunday = 0

// Time components
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());
console.log("Milliseconds:", now.getMilliseconds());

// Timestamp
console.log("Timestamp (ms since 1 Jan 1970):", now.getTime());

// Formatted outputs
console.log("Locale Date:", now.toLocaleDateString());
console.log("Locale Time:", now.toLocaleTimeString());
console.log("Locale Date & Time:", now.toLocaleString());

// UTC values
console.log("UTC Year:", now.getUTCFullYear());
console.log("UTC Hours:", now.getUTCHours());

// ISO format (commonly used in APIs)
console.log("ISO Format:", now.toISOString());

// Check type
console.log("Data Type:", typeof now);
