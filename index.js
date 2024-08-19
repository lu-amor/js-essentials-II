console.log("\n ejercicio 1: ")

function getTotal(inventory) {
    return inventory.reduce((acc, e) => acc + e.price * e.quantity, 0);
}

console.log("total: " + getTotal([{article: '🍔', price: 15, quantity: '1'}, {article: '🍟', price: 10, quantity: '2'}]));
// -----------------------------------------------------------------------------------------
console.log("\n ejercicio 2: ")

function countBanana(inventory) {
    const onlyBananas = inventory.filter((e) => e === '🍌');
    return onlyBananas.length;
}

console.log("🍌 amount: " + countBanana(['🥑','🍌','🥭', '🍌']));
// -----------------------------------------------------------------------------------------
console.log("\n ejercicio 3: ")

function filterEvenNumbers(numbers) {
    return(numbers.filter((n) => n % 2 === 0));
}

console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
// -----------------------------------------------------------------------------------------
console.log("\n ejercicio 4: ")

function squareNumbers(numbers) {
    return(numbers.map((n) => n**2));
}

console.log(squareNumbers([1, 2, 3, 4, 5]));
// -----------------------------------------------------------------------------------------
console.log("\n ejercicio 5: ")

function findMax(numbers) {
    return(Math.max(...numbers));
}

console.log("max: " + findMax([1, 2, 3, 4, 5]));
// -----------------------------------------------------------------------------------------
console.log("\n ejercicio 6: ")

function calculateAverageAge(people) {
    let count = 0;
    let age = 0;
    for (person of people) {
        age += person.age;
        count++;
    }
    return(age/ count);
}

const people = [
        { name: "Juan", age: 25 },
        { name: "Carla", age: 30 },
        { name: "Lucia", age: 35 },
        { name: "El Chengue", age: 49 }
    ];
    console.log(calculateAverageAge(people));
// -----------------------------------------------------------------------------------------
console.log("\n ejercicio 7: ")

function combinedHobbies(people) {
    let hobbies = [];
    for (person of people) {
        hobbies = [...hobbies, ...person.hobbies];
    }
    return hobbies;
}

const persons = [
    {
        name: 'Paula',
        hobbies: ['reading 📚', 'gardening 🌱', 'painting 🎨']
    },
    {
        name: 'Martin',
        hobbies: ['cycling 🚴', 'cooking 🍳', 'hiking 🥾']
    },
    {
        name: 'Juan',
        hobbies: ['photography 📸', 'traveling ✈️', 'swimming 🏊‍♂️']
    },
    {
        name: 'Veronica',
        hobbies: ['dancing 💃', 'singing 🎤', 'running 🏃‍♀️']
    }
];

console.log(combinedHobbies(persons));
// -----------------------------------------------------------------------------------------
console.log("\n ejercicio 8: ")

function printChemicalInfo(chemicals) {
    let maxLineLength = 30;
    chemicals.forEach(chemical => {
        console.log("+-------------------------------------------------------+");
        console.log(`| Compound ID: ${chemical.compoundId.padEnd(41)}|`);
        console.log(`| Name: ${chemical.name.padEnd(48)}|`);
        console.log(`| Formula: ${chemical.formula.padEnd(45)}|`);
        console.log(`| Description: ${chemical.description.padEnd(38)}|`);
        console.log(`| Molecular Weight: ${chemical.molecularWeight.padEnd(36)}|`);
        console.log(`| Melting Point: ${chemical.meltingPoint.padEnd(39)}|`);
        console.log(`| Boiling Point: ${chemical.boilingPoint.padEnd(39)}|`);
        console.log(`| Solubility: ${chemical.solubility.padEnd(42)}|`);
        console.log("+-------------------------------------------------------+");
    });
}

const chemicals = [
    {
        compoundId: 'CHEM001',
        name: 'Aspirin',
        formula: 'C9H8O4',
        description: 'Aspirin is a common medication used to reduce pain and inflammation.',
        molecularWeight: '180.16 g/mol',
        meltingPoint: '135°C',
        boilingPoint: '140°C',
        solubility: 'Slightly soluble in water'
    },
    {
        compoundId: 'CHEM002',
        name: 'Caffeine',
        formula: 'C8H10N4O2',
        description: 'Caffeine is a stimulant found in coffee, tea, and various energy drinks.',
        molecularWeight: '194.19 g/mol',
        meltingPoint: '238°C',
        boilingPoint: '178°C',
        solubility: 'Freely soluble in water'
    },
    {
        compoundId: 'CHEM003',
        name: 'Ethanol',
        formula: 'C2H6O',
        description: 'Ethanol, also known as alcohol, is commonly used as a solvent and in alcoholic beverages.',
        molecularWeight: '46.07 g/mol',
        meltingPoint: '-114.1°C',
        boilingPoint: '78.37°C',
        solubility: 'Miscible with water'
    }
];

printChemicalInfo(chemicals)
// -----------------------------------------------------------------------------------------
console.log("\n ejercicio 9: ")

function getUniqueGuestList(guestList) {
    const unique = new Set(guestList);
    return Array.from(unique);
}

console.log(getUniqueGuestList(['Alice 🙆🏻‍♀️', 'Bob 🙍🏼', 'Charlie 👨🏼‍🚀', 'Alice 🙆🏻‍♀️', 'David 🤵🏿‍♂️']));
// -----------------------------------------------------------------------------------------
console.log("\n ejercicio 10: ")

function showUserProfile(user) {
    console.log("\n" + user.name);
    console.log("twitter: " + user.profile.social?.twitter || "no twitter");
    console.log("facebook: " + user.profile.social?.facebook || "no facebook");
    console.log("email: " + user.profile?.email || "no email");
}

const user1 = {
    id: 1,
    name: 'Carol Smith',
    profile: {
        social: {
            twitter: 'carol.smith',
            facebook: 'carol.smith77'
        }
    }
};

const user2 = {
    id: 2,
    name: 'Jane Smith',
    profile: {
        email: 'jane.smith@example.com'
    }
};

showUserProfile(user1);
showUserProfile(user2);
// -----------------------------------------------------------------------------------------
console.log("\n ejercicio 11: ")

function sortLeaderBoardByScoreDesc(leaderBoard) {
    return leaderBoard.sort((a, b) => b.score - a.score);
}

const leaderBoard = [
    { player: "John", score: 80 },
    { player: "Charlie", score: 20 },
    { player: "Julio", score: 50 },
    { player: "Bob", score: 80 },
    { player: "Bobby", score: 11 },
    { player: "Tommy", score: 43 },
    { player: "Eric", score: 99 },
    { player: "Alice", score: 100 },
    { player: "Alfred", score: 30 },
];

console.log(sortLeaderBoardByScoreDesc(leaderBoard));
// -----------------------------------------------------------------------------------------
console.log("\n ejercicio 12: ")

function getTopFiveWorstPlayers(leaderBoard) {
    return (leaderBoard.sort((a, b) => a.score - b.score)).slice(0, 5);
}

console.log(getTopFiveWorstPlayers(leaderBoard));
// -----------------------------------------------------------------------------------------
console.log("\n ejercicio 13: ")

const companyHierarchy = {
    name: 'Company',
    departments: [
    {
        name: 'Engineering',
        head: 'Alice',
        subDepartments: [
        {
            name: 'Backend',
            head: 'Bob',
            employees: ['Charlie', 'David']
        },
        {
            name: 'Frontend',
            head: 'Eve',
            employees: ['Frank', 'Grace']
        }
        ]
    },
    {
        name: 'Sales',
        head: 'Henry',
        employees: ['Isaac', 'Jane']
    }
    ]
};

function printHierarchy(hierarchy, indent = 0) {
    const indentation = ' '.repeat(indent);

    console.log(`${indentation}Name: ${hierarchy.name}`);
    
    if (hierarchy.head) {
        console.log(`${indentation}Head: ${hierarchy.head}`);
    }

    if (hierarchy.employees) {
        console.log(`${indentation}Employees: ${hierarchy.employees.join(', ')}`);
    }

    if (hierarchy.departments) {
        console.log(`${indentation}Departments:`);
        hierarchy.departments.forEach(department => {
            printHierarchy(department, indent + 4);
        });
    }

    if (hierarchy.subDepartments) {
        console.log(`${indentation}SubDepartments:`);
        hierarchy.subDepartments.forEach(subDepartment => {
            printHierarchy(subDepartment, indent + 4);
        });
    }
}

function safeCopy(obj) {
    return {...obj};
}


console.log('Original Company Hierarchy:');
console.log(printHierarchy(companyHierarchy));

const copiedHierarchy = safeCopy(companyHierarchy);
copiedHierarchy.departments.push({
    name: 'Marketing',
    head: 'Karen',
    employees: ['Liam', 'Mia']
});
console.log("\n" + 'Copied Company Hierarchy with Modifications:');
console.log(printHierarchy(copiedHierarchy));
