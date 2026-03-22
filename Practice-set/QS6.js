let companies = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];

// Step 1 
let rmvCompany = companies.shift();
console.log(`Company ${rmvCompany} is now removed. Final output is = `, companies);

// Step 2
console.log("\nName of Companies = ", companies);
let rmvUber = companies.splice(1, 1, "Ola");
console.log(`Company ${rmvUber} is successfully removed. Final output is = `, companies);

// Step 3
console.log("\nName of Companies = ", companies);
companies.push("Amazon");
console.log(`Amazon is now added successfully! Final output is = `, companies);