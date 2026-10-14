/**
 * Problem Solving Arena Dataset - IIUC CSE
 * Complete collection of Sessions, Practice Problems (D1-D27, C1-C28, L1-L50, Switch, Animation)
 * with 3-tier pedagogical AI hints and verified C solutions.
 */

const ARENA_DATA = {
  aiGuidelines: {
    title: "AI ব্যবহারের নতুন নিয়ম (Pedagogical AI Learning Rules)",
    intro: "AI ব্যবহার করা খারাপ নয়। সমস্যা হয় যখন AI তোমার হয়ে প্রতিটি সিদ্ধান্ত নেয় এবং তুমি নিজে চেষ্টা করার সুযোগ পাও না।",
    rules: [
      {
        step: "১. নিজে চেষ্টা (Self Effort)",
        desc: "Problem পড়ে input/output, example ও logic খাতায় লিখবে; অন্তত ২০-৩০ মিনিট একা চেষ্টা করবে।",
        icon: "fa-solid fa-brain"
      },
      {
        step: "২. ৩টি ধাপে Hint নাও (3-Tier Hint)",
        desc: "আটকে গেলে AI-কে বলবে: 'একটি hint দাও, full solution নয়।' প্রথমে Concept, তারপর Algorithm, শেষে Corner Case খুঁজবে।",
        icon: "fa-solid fa-lightbulb"
      },
      {
        step: "৩. Code Debug ও ত্রুটি খোঁজা (Debugging)",
        desc: "নিজে code লিখবে, run করবে, compile error বা WA পড়বে এবং নিজে কারণ খুঁজে ঠিক করার চেষ্টা করবে।",
        icon: "fa-solid fa-bug"
      },
      {
        step: "৪. Verify & Self Assessment (যাচাই)",
        desc: "নিজের solution কাজ করার পর AI review নেবে। তুমি তখনই একটি topic শিখেছো বলবে যখন তুমি AI ছাড়া: (১) code লিখতে পারো, (২) code explain করতে পারো, (৩) code modify করতে পারো।",
        icon: "fa-solid fa-circle-check"
      }
    ],
    copyPrompt: `আমি নিজে solve করতে চাই। Full solution দেবে না। প্রথমে একটি hint দাও। আমার logic ভুল হলে কোথায় ভুল হচ্ছে বুঝতে সাহায্য করো, কিন্তু code লিখে দিও না।`
  },

  categories: [
    { id: "all", name: "All Topics", icon: "fa-solid fa-layer-group" },
    { id: "DataType", name: "Data Types & I/O", icon: "fa-solid fa-code" },
    { id: "Library Function", name: "Library Functions & Math", icon: "fa-solid fa-square-root-variable" },
    { id: "Condition (If-else)", name: "Condition (If-Else)", icon: "fa-solid fa-code-branch" },
    { id: "Nested Condition", name: "Nested Condition", icon: "fa-solid fa-diagram-project" },
    { id: "Loop", name: "Loops & Iterations", icon: "fa-solid fa-arrows-rotate" },
    { id: "Switch", name: "Switch Case", icon: "fa-solid fa-toggle-on" },
    { id: "Animation", name: "C Graphics / Animation", icon: "fa-solid fa-film" }
  ],

  videos: [
    {
      id: "V0",
      session: "Session 0",
      title: "Introduction to the playlist",
      url: "https://www.youtube.com/watch?v=U2nn56-dSxI&list=PLFxy2GUHK0ams5myVO5DDXW8gxuCn2T28&index=2",
      category: "DataType",
      duration: "3m",
      date: "8/21/2026"
    },
    {
      id: "V1",
      session: "Session 1",
      title: "Our First Submission",
      url: "https://www.youtube.com/watch?v=Tt_rxtInPxI&list=PLFxy2GUHK0ams5myVO5DDXW8gxuCn2T28&index=2",
      category: "DataType",
      duration: "10m",
      date: "8/31/2026"
    },
    {
      id: "V2",
      session: "Session 2",
      title: "int and double Data Type, Operators and I/O",
      url: "https://www.youtube.com/watch?v=ywiB8CavJhQ&list=PLFxy2GUHK0ams5myVO5DDXW8gxuCn2T28&index=3",
      category: "DataType",
      duration: "45m",
      date: "8/31/2026"
    },
    {
      id: "V2_solve",
      session: "Solve Class",
      title: "Solve Class on Assignment 2: beecrowd 1005, 1008 and 1010",
      url: "https://www.youtube.com/watch?v=bgV0Y6e2bGc&list=PLFxy2GUHK0ams5myVO5DDXW8gxuCn2T28&index=4",
      category: "DataType",
      duration: "30m",
      date: "8/31/2026"
    },
    {
      id: "V3",
      session: "Session 3",
      title: "Operators, Type Casting and Library Functions",
      url: "https://www.youtube.com/watch?v=kJpewIuHmqw&list=PLFxy2GUHK0ams5myVO5DDXW8gxuCn2T28&index=5",
      category: "Library Function",
      duration: "40m",
      date: "8/31/2026"
    },
    {
      id: "V14_1",
      session: "Session 14 (Part 1/3)",
      title: "Constants and Type Modifiers",
      url: "https://www.youtube.com/watch?v=DNM8biSMPxE&list=PLFxy2GUHK0ams5myVO5DDXW8gxuCn2T28&index=27",
      category: "Library Function",
      duration: "25m",
      date: "9/2/2026"
    },
    {
      id: "V14_2",
      session: "Session 14 (Part 2/3)",
      title: "Mod Operator and Pre vs Post Increment",
      url: "https://www.youtube.com/watch?v=6MiOI5xtiLE&list=PLFxy2GUHK0ams5myVO5DDXW8gxuCn2T28&index=28",
      category: "Library Function",
      duration: "25m",
      date: "9/2/2026"
    },
    {
      id: "V3_solve",
      session: "Solve Class",
      title: "Solve Class on Assignment 3: beecrowd 1013 and 1018",
      url: "https://www.youtube.com/watch?v=UX21g0FG0so&list=PLFxy2GUHK0ams5myVO5DDXW8gxuCn2T28&index=6",
      category: "Library Function",
      duration: "35m",
      date: "9/2/2026"
    },
    {
      id: "V14_3",
      session: "Session 14 (Part 3/3)",
      title: "Welcome to Newcomer Sheet",
      url: "https://www.youtube.com/watch?v=xjKEkuhYhiQ&list=PLFxy2GUHK0ams5myVO5DDXW8gxuCn2T28&index=29",
      category: "DataType",
      duration: "20m",
      date: "9/6/2026"
    },
    {
      id: "V4_1",
      session: "Session 4 (Part 1/3)",
      title: "Relational and Logical Operators",
      url: "https://www.youtube.com/watch?v=Yb2T3YRRqNE&list=PLFxy2GUHK0ams5myVO5DDXW8gxuCn2T28&index=7",
      category: "Condition (If-else)",
      duration: "30m",
      date: "9/9/2026"
    },
    {
      id: "V4_2",
      session: "Session 4 (Part 2/3)",
      title: "If...else (Conditional Statement)",
      url: "https://www.youtube.com/watch?v=ZhCubHS9iGg&list=PLFxy2GUHK0ams5myVO5DDXW8gxuCn2T28&index=8",
      category: "Condition (If-else)",
      duration: "35m",
      date: "9/9/2026"
    },
    {
      id: "V4_3",
      session: "Session 4 (Part 3/3)",
      title: "If...else Related Problems (Problem Statements Explained)",
      url: "https://www.youtube.com/watch?v=vM2hF30J9ZY&list=PLFxy2GUHK0ams5myVO5DDXW8gxuCn2T28&index=9",
      category: "Condition (If-else)",
      duration: "25m",
      date: "9/9/2026"
    },
    {
      id: "V5",
      session: "Session 5",
      title: "Better Way to Approach a Problem (with solution of beecrowd 1046)",
      url: "https://www.youtube.com/watch?v=0X_3TDKv7n0&list=PLFxy2GUHK0ams5myVO5DDXW8gxuCn2T28&index=10",
      category: "Condition (If-else)",
      duration: "35m",
      date: "9/13/2026"
    },
    {
      id: "V6_1",
      session: "Session 6 (Part 1/2)",
      title: "If-else-if Ladder and Nested If",
      url: "https://www.youtube.com/watch?v=lRsazFmCyPU&list=PLFxy2GUHK0ams5myVO5DDXW8gxuCn2T28&index=11",
      category: "Nested Condition",
      duration: "30m",
      date: "9/10/2026"
    },
    {
      id: "V6_2",
      session: "Session 6 (Part 2/2)",
      title: "Problem Statements of Nested If Related Problems",
      url: "https://www.youtube.com/watch?v=ryu3pklrv7E&list=PLFxy2GUHK0ams5myVO5DDXW8gxuCn2T28&index=12",
      category: "Nested Condition",
      duration: "25m",
      date: "9/10/2026"
    },
    {
      id: "V7_1",
      session: "Session 7 (Part 1/2)",
      title: "Different Types of Errors",
      url: "https://www.youtube.com/watch?v=1OHIQ1QePVc&list=PLFxy2GUHK0ams5myVO5DDXW8gxuCn2T28&index=13",
      category: "Nested Condition",
      duration: "25m",
      date: "9/10/2026"
    },
    {
      id: "V7_2",
      session: "Session 7 (Part 2/2)",
      title: "Assignment and Increment/Decrement Operators in C",
      url: "https://www.youtube.com/watch?v=cgxKBhoX8ow&list=PLFxy2GUHK0ams5myVO5DDXW8gxuCn2T28&index=14",
      category: "Nested Condition",
      duration: "30m",
      date: "9/10/2026"
    },
    {
      id: "V15_1",
      session: "Session 15 (Part 1/2)",
      title: "Operator Precedence & Associativity, Library Functions",
      url: "https://www.youtube.com/watch?v=Ixac35so0sI&list=PLFxy2GUHK0ams5myVO5DDXW8gxuCn2T28&index=31",
      category: "Library Function",
      duration: "30m",
      date: "9/11/2026"
    },
    {
      id: "V15_2",
      session: "Session 15 (Part 2/2)",
      title: "More About scanf and printf Functions",
      url: "https://www.youtube.com/watch?v=Dl2LUk-Cr8k&list=PLFxy2GUHK0ams5myVO5DDXW8gxuCn2T28&index=32",
      category: "Library Function",
      duration: "30m",
      date: "9/11/2026"
    },
    {
      id: "V7_solve",
      session: "Solve Class",
      title: "Solve Class on Assignment 7: Beecrowd 1060",
      url: "https://www.youtube.com/watch?v=3BE70-l5XFs&list=PLFxy2GUHK0ams5myVO5DDXW8gxuCn2T28&index=15",
      category: "Nested Condition",
      duration: "25m",
      date: "9/11/2026"
    },
    {
      id: "V8_1",
      session: "Session 8 (Part 1/2)",
      title: "The while loop",
      url: "https://www.youtube.com/watch?v=-pRYD-Nan8s&list=PLFxy2GUHK0ams5myVO5DDXW8gxuCn2T28&index=16",
      category: "Loop",
      duration: "35m",
      date: "9/14/2026"
    },
    {
      id: "V8_2",
      session: "Session 8 (Part 2/2)",
      title: "Loop Related Problems and Handling Multiple Input",
      url: "https://www.youtube.com/watch?v=qkgojHFzQZs&list=PLFxy2GUHK0ams5myVO5DDXW8gxuCn2T28&index=17",
      category: "Loop",
      duration: "40m",
      date: "9/14/2026"
    },
    {
      id: "V8_solve",
      session: "Solve Class",
      title: "Solve Class on Assignment 8: Beecrowd 1080 and Concept of Infinite Value",
      url: "https://www.youtube.com/watch?v=cFxnl-L0fTI&list=PLFxy2GUHK0ams5myVO5DDXW8gxuCn2T28&index=18",
      category: "Loop",
      duration: "30m",
      date: "9/15/2026"
    },
    {
      id: "V9",
      session: "Session 9",
      title: "The break Statement",
      url: "https://www.youtube.com/watch?v=41iY3mTDg6w&list=PLFxy2GUHK0ams5myVO5DDXW8gxuCn2T28&index=19",
      category: "Loop",
      duration: "30m",
      date: "9/16/2026"
    },
    {
      id: "V10",
      session: "Session 10",
      title: "The for Loop, Concept of Prime and Fibonacci Sequence",
      url: "https://www.youtube.com/watch?v=pJ6cYeELV3M&list=PLFxy2GUHK0ams5myVO5DDXW8gxuCn2T28&index=20",
      category: "Loop",
      duration: "45m",
      date: "9/18/2026"
    },
    {
      id: "V10_solve",
      session: "Solve Class",
      title: "Solve Class on Assignment 10: Checking Prime and Flag Variable",
      url: "https://www.youtube.com/watch?v=WoHVxuYDzb8&list=PLFxy2GUHK0ams5myVO5DDXW8gxuCn2T28&index=21",
      category: "Loop",
      duration: "30m",
      date: "9/18/2026"
    },
    {
      id: "V16_2",
      session: "Session 16 (Part 2/2)",
      title: "continue, goto and do-while",
      url: "https://www.youtube.com/watch?v=tMV0K1m5gTc&list=PLFxy2GUHK0ams5myVO5DDXW8gxuCn2T28&index=36",
      category: "Loop",
      duration: "35m",
      date: "9/20/2026"
    },
    {
      id: "V16_1",
      session: "Session 16 (Part 1/2)",
      title: "The switch Statement",
      url: "https://www.youtube.com/watch?v=s4RyvKIGClo&list=PLFxy2GUHK0ams5myVO5DDXW8gxuCn2T28&index=35",
      category: "Switch",
      duration: "30m",
      date: "9/22/2026"
    },
    {
      id: "V17",
      session: "Session 17",
      title: "Animation with C",
      url: "https://www.youtube.com/watch?v=VdS_qn7dLqA&list=PLFxy2GUHK0ams5myVO5DDXW8gxuCn2T28&index=38",
      category: "Animation",
      duration: "40m",
      date: "9/24/2026"
    }
  ],

  problems: [
    // --- SECTION 1: DATA TYPES & BASIC I/O (D1 - D27) ---
    {
      id: "D1",
      title: "beecrowd 1000 - Hello World!",
      judge: "Beecrowd",
      link: "https://judge.beecrowd.com/en/problems/view/1000",
      category: "DataType",
      verdict: "ac",
      solveTime: "10m",
      date: "8/31/2026",
      comment: "First judge submission",
      hint1: "The problem simply requires printing 'Hello World!' to standard output.",
      hint2: "Remember to include the exact case, exclamation mark, and end with a newline (\\n).",
      hint3: "In C, use `printf(\"Hello World!\\n\");` and return 0 from `main`.",
      solution: `#include <stdio.h>

int main() {
    printf("Hello World!\\n");
    return 0;
}`
    },
    {
      id: "D2",
      title: "beecrowd 1001 - Extremely Basic",
      judge: "Beecrowd",
      link: "https://judge.beecrowd.com/en/problems/view/1001",
      category: "DataType",
      verdict: "ac",
      solveTime: "5m",
      date: "8/31/2026",
      comment: "Basic addition",
      hint1: "Read two integer values A and B from standard input.",
      hint2: "Compute X = A + B.",
      hint3: "Print with the exact format 'X = %d\\n' with spaces around '='.",
      solution: `#include <stdio.h>

int main() {
    int A, B, X;
    if (scanf("%d %d", &A, &B) == 2) {
        X = A + B;
        printf("X = %d\\n", X);
    }
    return 0;
}`
    },
    {
      id: "D3",
      title: "beecrowd 1002 - Area of a Circle",
      judge: "Beecrowd",
      link: "https://judge.beecrowd.com/en/problems/view/1002",
      category: "DataType",
      verdict: "ac",
      solveTime: "10m",
      date: "8/31/2026",
      comment: "pi = 3.14159, precision 4 decimal places",
      hint1: "Area of a circle formula: A = π * R^2.",
      hint2: "Use π = 3.14159 as specified by the problem. Use `double` for precision.",
      hint3: "Format output with 4 decimal places using `printf(\"A=%.4lf\\n\", area);`.",
      solution: `#include <stdio.h>

int main() {
    double R, A;
    const double PI = 3.14159;
    if (scanf("%lf", &R) == 1) {
        A = PI * R * R;
        printf("A=%.4lf\\n", A);
    }
    return 0;
}`
    },
    {
      id: "D4",
      title: "beecrowd 1003 - Simple Sum",
      judge: "Beecrowd",
      link: "https://judge.beecrowd.com/en/problems/view/1003",
      category: "DataType",
      verdict: "ac",
      solveTime: "10m",
      date: "8/31/2026",
      comment: "SOMA = A + B",
      hint1: "Read two integer numbers A and B.",
      hint2: "Calculate SOMA = A + B.",
      hint3: "Format: `SOMA = %d\\n`.",
      solution: `#include <stdio.h>

int main() {
    int A, B, SOMA;
    if (scanf("%d %d", &A, &B) == 2) {
        SOMA = A + B;
        printf("SOMA = %d\\n", SOMA);
    }
    return 0;
}`
    },
    {
      id: "D5",
      title: "beecrowd 1004 - Simple Product",
      judge: "Beecrowd",
      link: "https://judge.beecrowd.com/en/problems/view/1004",
      category: "DataType",
      verdict: "ac",
      solveTime: "10m",
      date: "8/31/2026",
      comment: "PROD = A * B",
      hint1: "Read two integer numbers A and B.",
      hint2: "Calculate PROD = A * B.",
      hint3: "Format: `PROD = %d\\n`.",
      solution: `#include <stdio.h>

int main() {
    int A, B, PROD;
    if (scanf("%d %d", &A, &B) == 2) {
        PROD = A * B;
        printf("PROD = %d\\n", PROD);
    }
    return 0;
}`
    },
    {
      id: "D6",
      title: "beecrowd 1005 - Average 1",
      judge: "Beecrowd",
      link: "https://judge.beecrowd.com/en/problems/view/1005",
      category: "DataType",
      verdict: "ac",
      solveTime: "10m",
      date: "8/31/2026",
      comment: "Weighted average: weights 3.5 and 7.5",
      hint1: "A has weight 3.5, and B has weight 7.5. Total weight is 11.0.",
      hint2: "Average = (A * 3.5 + B * 7.5) / 11.0.",
      hint3: "Format output with 5 decimal places: `MEDIA = %.5lf\\n`.",
      solution: `#include <stdio.h>

int main() {
    double A, B, MEDIA;
    if (scanf("%lf %lf", &A, &B) == 2) {
        MEDIA = (A * 3.5 + B * 7.5) / 11.0;
        printf("MEDIA = %.5lf\\n", MEDIA);
    }
    return 0;
}`
    },
    {
      id: "D7",
      title: "beecrowd 1006 - Average 2",
      judge: "Beecrowd",
      link: "https://judge.beecrowd.com/en/problems/view/1006",
      category: "DataType",
      verdict: "ac",
      solveTime: "10m",
      date: "8/31/2026",
      comment: "Weighted average: weights 2, 3 and 5",
      hint1: "A has weight 2, B has weight 3, C has weight 5. Total weight is 10.0.",
      hint2: "MEDIA = (A * 2.0 + B * 3.0 + C * 5.0) / 10.0.",
      hint3: "Format output with 1 decimal place: `MEDIA = %.1lf\\n`.",
      solution: `#include <stdio.h>

int main() {
    double A, B, C, MEDIA;
    if (scanf("%lf %lf %lf", &A, &B, &C) == 3) {
        MEDIA = (A * 2.0 + B * 3.0 + C * 5.0) / 10.0;
        printf("MEDIA = %.1lf\\n", MEDIA);
    }
    return 0;
}`
    },
    {
      id: "D8",
      title: "beecrowd 1007 - Difference",
      judge: "Beecrowd",
      link: "https://judge.beecrowd.com/en/problems/view/1007",
      category: "DataType",
      verdict: "ac",
      solveTime: "8m",
      date: "8/31/2026",
      comment: "DIFERENCA = (A * B - C * D)",
      hint1: "Read four integer values: A, B, C, and D.",
      hint2: "Calculate DIFERENCA = (A * B - C * D).",
      hint3: "Format: `DIFERENCA = %d\\n`.",
      solution: `#include <stdio.h>

int main() {
    int A, B, C, D, DIFERENCA;
    if (scanf("%d %d %d %d", &A, &B, &C, &D) == 4) {
        DIFERENCA = (A * B - C * D);
        printf("DIFERENCA = %d\\n", DIFERENCA);
    }
    return 0;
}`
    },
    {
      id: "D9",
      title: "beecrowd 1008 - Salary",
      judge: "Beecrowd",
      link: "https://judge.beecrowd.com/en/problems/view/1008",
      category: "DataType",
      verdict: "ac",
      solveTime: "12m",
      date: "8/31/2026",
      comment: "Number, worked hours, hourly rate",
      hint1: "Inputs are: employee number (int), worked hours (int), hourly pay rate (double).",
      hint2: "Total salary = worked hours * hourly pay rate.",
      hint3: "Print: `NUMBER = %d\\n` then `SALARY = U$ %.2lf\\n`.",
      solution: `#include <stdio.h>

int main() {
    int num, hours;
    double rate, salary;
    if (scanf("%d %d %lf", &num, &hours, &rate) == 3) {
        salary = hours * rate;
        printf("NUMBER = %d\\n", num);
        printf("SALARY = U$ %.2lf\\n", salary);
    }
    return 0;
}`
    },
    {
      id: "D10",
      title: "beecrowd 1010 - Simple Calculate",
      judge: "Beecrowd",
      link: "https://judge.beecrowd.com/en/problems/view/1010",
      category: "DataType",
      verdict: "ac",
      solveTime: "12m",
      date: "8/31/2026",
      comment: "Two product lines with code, units and unit price",
      hint1: "Each line contains code (int), units (int), price per unit (double).",
      hint2: "Total = units1 * price1 + units2 * price2.",
      hint3: "Format output: `VALOR A PAGAR: R$ %.2lf\\n`.",
      solution: `#include <stdio.h>

int main() {
    int code1, units1, code2, units2;
    double price1, price2, total;
    if (scanf("%d %d %lf", &code1, &units1, &price1) == 3 &&
        scanf("%d %d %lf", &code2, &units2, &price2) == 3) {
        total = units1 * price1 + units2 * price2;
        printf("VALOR A PAGAR: R$ %.2lf\\n", total);
    }
    return 0;
}`
    },
    {
      id: "D11",
      title: "Custom Formula: Fahrenheit to Celsius",
      judge: "Custom",
      link: "#",
      category: "DataType",
      verdict: "ac",
      solveTime: "5m",
      date: "8/31/2026",
      comment: "C = 5 / 9.0 * (F - 32) (Beware of integer division 5/9!)",
      hint1: "Formula is C = 5/9 * (F - 32). In C, `5 / 9` produces integer 0!",
      hint2: "Use `5.0 / 9.0` or cast to double.",
      hint3: "Scan F as double, calculate C, and print with required precision.",
      solution: `#include <stdio.h>

int main() {
    double F, C;
    if (scanf("%lf", &F) == 1) {
        C = (5.0 / 9.0) * (F - 32.0);
        printf("Temperature in Celsius = %.2lf\\n", C);
    }
    return 0;
}`
    },
    {
      id: "D12",
      title: "beecrowd 1011 - Sphere",
      judge: "Beecrowd",
      link: "https://judge.beecrowd.com/en/problems/view/1011",
      category: "Library Function",
      verdict: "ac",
      solveTime: "8m",
      date: "8/31/2026",
      comment: "Volume = (4/3.0) * pi * R^3",
      hint1: "Formula: Volume = (4/3.0) * pi * R^3 with pi = 3.14159.",
      hint2: "Avoid integer division `4/3` which equals 1. Use `(4.0 / 3.0)`.",
      hint3: "Format: `VOLUME = %.3lf\\n`.",
      solution: `#include <stdio.h>

int main() {
    double R, volume;
    const double PI = 3.14159;
    if (scanf("%lf", &R) == 1) {
        volume = (4.0 / 3.0) * PI * R * R * R;
        printf("VOLUME = %.3lf\\n", volume);
    }
    return 0;
}`
    },
    {
      id: "D13",
      title: "beecrowd 1012 - Area",
      judge: "Beecrowd",
      link: "https://judge.beecrowd.com/en/problems/view/1012",
      category: "Library Function",
      verdict: "ac",
      solveTime: "15m",
      date: "8/31/2026",
      comment: "Areas of triangle, circle, trapezium, square, rectangle",
      hint1: "Read 3 double values A, B, C.",
      hint2: "Formulas: Triangle = (A*C)/2, Circle = 3.14159*C^2, Trapezium = ((A+B)*C)/2, Square = B*B, Rectangle = A*B.",
      hint3: "Print each labeled line with 3 decimal places.",
      solution: `#include <stdio.h>

int main() {
    double A, B, C;
    const double PI = 3.14159;
    if (scanf("%lf %lf %lf", &A, &B, &C) == 3) {
        printf("TRIANGULO: %.3lf\\n", (A * C) / 2.0);
        printf("CIRCULO: %.3lf\\n", PI * C * C);
        printf("TRAPEZIO: %.3lf\\n", ((A + B) * C) / 2.0);
        printf("QUADRADO: %.3lf\\n", B * B);
        printf("RETANGULO: %.3lf\\n", A * B);
    }
    return 0;
}`
    },
    {
      id: "D14",
      title: "beecrowd 1013 - The Greatest",
      judge: "Beecrowd",
      link: "https://judge.beecrowd.com/en/problems/view/1013",
      category: "DataType",
      verdict: "ac",
      solveTime: "10m",
      date: "9/2/2026",
      comment: "MaiorAB = (a+b+abs(a-b))/2",
      hint1: "Formula for max of two numbers without if-else: MaiorAB = (a + b + abs(a - b)) / 2.",
      hint2: "Compute max of (A, B) first, then compute max of that result and C.",
      hint3: "Include `<stdlib.h>` for `abs()`.",
      solution: `#include <stdio.h>
#include <stdlib.h>

int main() {
    int a, b, c, maiorAB, maior;
    if (scanf("%d %d %d", &a, &b, &c) == 3) {
        maiorAB = (a + b + abs(a - b)) / 2;
        maior = (maiorAB + c + abs(maiorAB - c)) / 2;
        printf("%d eh o maior\\n", maior);
    }
    return 0;
}`
    },
    {
      id: "D15",
      title: "beecrowd 1014 - Consumption",
      judge: "Beecrowd",
      link: "https://judge.beecrowd.com/en/problems/view/1014",
      category: "Library Function",
      verdict: "ac",
      solveTime: "7m",
      date: "9/2/2026",
      comment: "Total distance / spent fuel",
      hint1: "Inputs: X (int, total distance in km) and Y (double, total fuel in liters).",
      hint2: "Average consumption = X / Y.",
      hint3: "Format: `%.3lf km/l\\n`.",
      solution: `#include <stdio.h>

int main() {
    int X;
    double Y;
    if (scanf("%d %lf", &X, &Y) == 2) {
        printf("%.3lf km/l\\n", X / Y);
    }
    return 0;
}`
    },
    {
      id: "D16",
      title: "beecrowd 1015 - Distance Between Two Points",
      judge: "Beecrowd",
      link: "https://judge.beecrowd.com/en/problems/view/1015",
      category: "Library Function",
      verdict: "ac",
      solveTime: "8m",
      date: "9/2/2026",
      comment: "Distance = sqrt((x2-x1)^2 + (y2-y1)^2)",
      hint1: "Inputs: (x1, y1) and (x2, y2).",
      hint2: "Use Pythagorean distance formula: sqrt((x2-x1)*(x2-x1) + (y2-y1)*(y2-y1)).",
      hint3: "Include `<math.h>` and compile with `-lm` if needed.",
      solution: `#include <stdio.h>
#include <math.h>

int main() {
    double x1, y1, x2, y2, dist;
    if (scanf("%lf %lf %lf %lf", &x1, &y1, &x2, &y2) == 4) {
        dist = sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
        printf("%.4lf\\n", dist);
    }
    return 0;
}`
    },
    {
      id: "D17",
      title: "beecrowd 1016 - Distance",
      judge: "Beecrowd",
      link: "https://judge.beecrowd.com/en/problems/view/1016",
      category: "DataType",
      verdict: "ac",
      solveTime: "5m",
      date: "9/2/2026",
      comment: "Relative speed 30 km/h (1 km every 2 mins)",
      hint1: "Car Y moves away from Car X at 30 km/h (relative speed).",
      hint2: "To gain 1 km distance, it takes 60/30 = 2 minutes.",
      hint3: "For distance d km, time = d * 2 minutes.",
      solution: `#include <stdio.h>

int main() {
    int d;
    if (scanf("%d", &d) == 1) {
        printf("%d minutos\\n", d * 2);
    }
    return 0;
}`
    },
    {
      id: "D18",
      title: "beecrowd 1017 - Fuel Spent",
      judge: "Beecrowd",
      link: "https://judge.beecrowd.com/en/problems/view/1017",
      category: "Library Function",
      verdict: "ac",
      solveTime: "6m",
      date: "9/2/2026",
      comment: "12 km/L car",
      hint1: "Inputs: spent time in hours (int), average speed in km/h (int).",
      hint2: "Total distance = time * speed. Fuel spent = distance / 12.0.",
      hint3: "Format with 3 decimal places: `%.3lf\\n`.",
      solution: `#include <stdio.h>

int main() {
    int hours, speed;
    if (scanf("%d %d", &hours, &speed) == 2) {
        double liters = (hours * speed) / 12.0;
        printf("%.3lf\\n", liters);
    }
    return 0;
}`
    },
    {
      id: "D19",
      title: "beecrowd 1018 - Banknotes",
      judge: "Beecrowd",
      link: "https://judge.beecrowd.com/en/problems/view/1018",
      category: "Library Function",
      verdict: "ac",
      solveTime: "15m",
      date: "9/2/2026",
      comment: "Greedy banknote decomposition (100, 50, 20, 10, 5, 2, 1)",
      hint1: "Print the original integer amount first.",
      hint2: "Use integer division `/` to find note count and modulo `%` for the remaining amount.",
      hint3: "Notes: 100, 50, 20, 10, 5, 2, 1.",
      solution: `#include <stdio.h>

int main() {
    int N, rem;
    if (scanf("%d", &N) == 1) {
        printf("%d\\n", N);
        rem = N;
        int notes[] = {100, 50, 20, 10, 5, 2, 1};
        for (int i = 0; i < 7; i++) {
            printf("%d nota(s) de R$ %d,00\\n", rem / notes[i], notes[i]);
            rem %= notes[i];
        }
    }
    return 0;
}`
    },
    {
      id: "D20",
      title: "beecrowd 1019 - Time Conversion",
      judge: "Beecrowd",
      link: "https://judge.beecrowd.com/en/problems/view/1019",
      category: "Library Function",
      verdict: "ac",
      solveTime: "8m",
      date: "9/2/2026",
      comment: "Seconds to hours:minutes:seconds",
      hint1: "1 hour = 3600 seconds, 1 minute = 60 seconds.",
      hint2: "hours = N / 3600; minutes = (N % 3600) / 60; seconds = N % 60.",
      hint3: "Format: `hours:minutes:seconds\\n`.",
      solution: `#include <stdio.h>

int main() {
    int N;
    if (scanf("%d", &N) == 1) {
        int h = N / 3600;
        int m = (N % 3600) / 60;
        int s = N % 60;
        printf("%d:%d:%d\\n", h, m, s);
    }
    return 0;
}`
    },
    {
      id: "D21",
      title: "beecrowd 1020 - Age in Days",
      judge: "Beecrowd",
      link: "https://judge.beecrowd.com/en/problems/view/1020",
      category: "Library Function",
      verdict: "ac",
      solveTime: "8m",
      date: "9/2/2026",
      comment: "Assume 1 year = 365 days, 1 month = 30 days",
      hint1: "Assume standard 365 days/year and 30 days/month as specified.",
      hint2: "years = N / 365; rem = N % 365; months = rem / 30; days = rem % 30.",
      hint3: "Print exact Portuguese strings: ano(s), mes(es), dia(s).",
      solution: `#include <stdio.h>

int main() {
    int N;
    if (scanf("%d", &N) == 1) {
        int y = N / 365;
        int rem = N % 365;
        int m = rem / 30;
        int d = rem % 30;
        printf("%d ano(s)\\n%d mes(es)\\n%d dia(s)\\n", y, m, d);
    }
    return 0;
}`
    },
    {
      id: "D22",
      title: "Codeforces 219158/C - Simple Calculator",
      judge: "Codeforces",
      link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/C",
      category: "DataType",
      verdict: "ac",
      solveTime: "10m",
      date: "9/6/2026",
      comment: "long long required for multiplication!",
      hint1: "Inputs X and Y can be up to 10^5.",
      hint2: "Their product can exceed 32-bit signed integer limits (~2 * 10^9), causing overflow in 32-bit int.",
      hint3: "Use `long long` for variables and `%lld` in printf/scanf.",
      solution: `#include <stdio.h>

int main() {
    long long X, Y;
    if (scanf("%lld %lld", &X, &Y) == 2) {
        printf("%lld + %lld = %lld\\n", X, Y, X + Y);
        printf("%lld * %lld = %lld\\n", X, Y, X * Y);
        printf("%lld - %lld = %lld\\n", X, Y, X - Y);
    }
    return 0;
}`
    },
    {
      id: "D23",
      title: "Codeforces 219158/D - Difference",
      judge: "Codeforces",
      link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/D",
      category: "DataType",
      verdict: "ac",
      solveTime: "5m",
      date: "9/6/2026",
      comment: "X = (A * B) - (C * D) with 64-bit integers",
      hint1: "Inputs A, B, C, D can be up to 10^5.",
      hint2: "Products A*B and C*D will overflow 32-bit int. Always use `long long`.",
      hint3: "Format: `Difference = %lld\\n`.",
      solution: `#include <stdio.h>

int main() {
    long long A, B, C, D;
    if (scanf("%lld %lld %lld %lld", &A, &B, &C, &D) == 4) {
        long long X = (A * B) - (C * D);
        printf("Difference = %lld\\n", X);
    }
    return 0;
}`
    },
    {
      id: "D24",
      title: "Codeforces 219158/E - Area of a Circle",
      judge: "Codeforces",
      link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/E",
      category: "DataType",
      verdict: "ac",
      solveTime: "16m",
      date: "9/9/2026",
      comment: "double precision, pi = 3.141592653, 9 decimal places",
      hint1: "Codeforces Newcomer Sheet requires pi = 3.141592653.",
      hint2: "Print output with 9 digits after the decimal point.",
      hint3: "Use `printf(\"%.9lf\\n\", pi * R * R);`.",
      solution: `#include <stdio.h>

int main() {
    double R;
    const double PI = 3.141592653;
    if (scanf("%lf", &R) == 1) {
        printf("%.9lf\\n", PI * R * R);
    }
    return 0;
}`
    },
    {
      id: "D25",
      title: "Codeforces 219158/F - Digits Summation",
      judge: "Codeforces",
      link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/F",
      category: "Library Function",
      verdict: "ac",
      solveTime: "8m",
      date: "9/9/2026",
      comment: "Sum of last digits of N and M",
      hint1: "How to extract the last digit of an integer?",
      hint2: "Use the modulo operator: `last_digit = N % 10`.",
      hint3: "Inputs can be up to 10^18, so store in `long long`.",
      solution: `#include <stdio.h>

int main() {
    long long N, M;
    if (scanf("%lld %lld", &N, &M) == 2) {
        printf("%lld\\n", (N % 10) + (M % 10));
    }
    return 0;
}`
    },
    {
      id: "D26",
      title: "Codeforces 219158/G - Summation from 1 to N",
      judge: "Codeforces",
      link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/G",
      category: "DataType",
      verdict: "ac",
      solveTime: "10m",
      date: "9/9/2026",
      comment: "Math formula N * (N + 1) / 2 to avoid O(N) TLE",
      hint1: "N can be as large as 10^9. A simple loop from 1 to N will give Time Limit Exceeded (TLE)!",
      hint2: "Use Gauss's formula: Sum = N * (N + 1) / 2 in O(1) time.",
      hint3: "Use `long long` because 10^9 * 10^9 = 10^18.",
      solution: `#include <stdio.h>

int main() {
    long long N;
    if (scanf("%lld", &N) == 1) {
        long long sum = N * (N + 1) / 2;
        printf("%lld\\n", sum);
    }
    return 0;
}`
    },
    {
      id: "D27",
      title: "Codeforces 219158/H - Two numbers",
      judge: "Codeforces",
      link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/H",
      category: "Library Function",
      verdict: "todo",
      solveTime: "10m",
      date: "9/9/2026",
      comment: "floor, ceil, round functions in math.h",
      hint1: "Calculate floor(A/B), ceil(A/B), and round(A/B).",
      hint2: "Cast `(double)A / B` before calling `floor()`, `ceil()`, and `round()`.",
      hint3: "Include `<math.h>`.",
      solution: `#include <stdio.h>
#include <math.h>

int main() {
    double A, B;
    if (scanf("%lf %lf", &A, &B) == 2) {
        printf("floor %.0lf / %.0lf = %.0lf\\n", A, B, floor(A / B));
        printf("ceil %.0lf / %.0lf = %.0lf\\n", A, B, ceil(A / B));
        printf("round %.0lf / %.0lf = %.0lf\\n", A, B, round(A / B));
    }
    return 0;
}`
    },

    // --- SECTION 2: CONDITIONALS & NESTED CONDITIONS (C1 - C28) ---
    {
      id: "C1",
      title: "Absolute value of a number",
      judge: "Custom",
      link: "#",
      category: "Condition (If-else)",
      verdict: "ac",
      solveTime: "5m",
      date: "9/9/2026",
      comment: "if (x < 0) x = -x",
      hint1: "If x is negative, its absolute value is -x.",
      hint2: "If x is positive or zero, it remains unchanged.",
      hint3: "Use `if (n < 0) n = -n;`.",
      solution: `#include <stdio.h>

int main() {
    int n;
    if (scanf("%d", &n) == 1) {
        if (n < 0) n = -n;
        printf("%d\\n", n);
    }
    return 0;
}`
    },
    {
      id: "C2",
      title: "Max / Min of two numbers",
      judge: "Custom",
      link: "#",
      category: "Condition (If-else)",
      verdict: "ac",
      solveTime: "5m",
      date: "9/9/2026",
      comment: "Simple if-else branching",
      hint1: "Compare two numbers a and b with `if (a > b)`.",
      hint2: "Store `max` and `min` accordingly.",
      hint3: "Print both values clearly.",
      solution: `#include <stdio.h>

int main() {
    int a, b;
    if (scanf("%d %d", &a, &b) == 2) {
        if (a > b) {
            printf("Max = %d, Min = %d\\n", a, b);
        } else {
            printf("Max = %d, Min = %d\\n", b, a);
        }
    }
    return 0;
}`
    },
    {
      id: "C3",
      title: "Check Positive / Negative / Zero",
      judge: "Custom",
      link: "#",
      category: "Condition (If-else)",
      verdict: "ac",
      solveTime: "5m",
      date: "9/9/2026",
      comment: "if-else if-else chain",
      hint1: "Three cases: n > 0, n < 0, or n == 0.",
      hint2: "Use an `if ... else if ... else` ladder.",
      hint3: "Test with negative, positive, and 0.",
      solution: `#include <stdio.h>

int main() {
    int n;
    if (scanf("%d", &n) == 1) {
        if (n > 0) printf("Positive\\n");
        else if (n < 0) printf("Negative\\n");
        else printf("Zero\\n");
    }
    return 0;
}`
    },
    {
      id: "C4",
      title: "beecrowd 1035 - Selection Test 1",
      judge: "Beecrowd",
      link: "https://judge.beecrowd.com/en/problems/view/1035",
      category: "Condition (If-else)",
      verdict: "ac",
      solveTime: "18m",
      date: "9/9/2026",
      comment: "Compound logical condition (&&)",
      hint1: "Conditions: B > C, D > A, (C + D) > (A + B), C > 0, D > 0, and A is even (A % 2 == 0).",
      hint2: "Combine all using logical AND `&&`.",
      hint3: "If all true, print 'Valores aceitos', otherwise 'Valores nao aceitos'.",
      solution: `#include <stdio.h>

int main() {
    int A, B, C, D;
    if (scanf("%d %d %d %d", &A, &B, &C, &D) == 4) {
        if (B > C && D > A && (C + D) > (A + B) && C > 0 && D > 0 && (A % 2 == 0)) {
            printf("Valores aceitos\\n");
        } else {
            printf("Valores nao aceitos\\n");
        }
    }
    return 0;
}`
    },
    {
      id: "C5",
      title: "beecrowd 1038 - Snack",
      judge: "Beecrowd",
      link: "https://judge.beecrowd.com/en/problems/view/1038",
      category: "Condition (If-else)",
      verdict: "ac",
      solveTime: "26m",
      date: "9/9/2026",
      comment: "Table lookup or if/switch for prices",
      hint1: "Prices: 1 -> 4.00, 2 -> 4.50, 3 -> 5.00, 4 -> 2.00, 5 -> 1.50.",
      hint2: "Multiply price by quantity.",
      hint3: "Output format: `Total: R$ %.2lf\\n`.",
      solution: `#include <stdio.h>

int main() {
    int code, qty;
    double price = 0.0;
    if (scanf("%d %d", &code, &qty) == 2) {
        if (code == 1) price = 4.00;
        else if (code == 2) price = 4.50;
        else if (code == 3) price = 5.00;
        else if (code == 4) price = 2.00;
        else if (code == 5) price = 1.50;
        
        printf("Total: R$ %.2lf\\n", price * qty);
    }
    return 0;
}`
    },
    {
      id: "C6",
      title: "beecrowd 1044 - Multiples",
      judge: "Beecrowd",
      link: "https://judge.beecrowd.com/en/problems/view/1044",
      category: "Condition (If-else)",
      verdict: "ac",
      solveTime: "14m",
      date: "9/9/2026",
      comment: "A % B == 0 || B % A == 0",
      hint1: "Either A is a multiple of B, or B is a multiple of A.",
      hint2: "Condition: `(A % B == 0 || B % A == 0)`.",
      hint3: "Print 'Sao Multiplos' or 'Nao sao Multiplos'.",
      solution: `#include <stdio.h>

int main() {
    int A, B;
    if (scanf("%d %d", &A, &B) == 2) {
        if (A % B == 0 || B % A == 0) {
            printf("Sao Multiplos\\n");
        } else {
            printf("Nao sao Multiplos\\n");
        }
    }
    return 0;
}`
    },
    {
      id: "C7",
      title: "beecrowd 1043 - Triangle",
      judge: "Beecrowd",
      link: "https://judge.beecrowd.com/en/problems/view/1043",
      category: "Condition (If-else)",
      verdict: "ac",
      solveTime: "20m",
      date: "9/9/2026",
      comment: "Triangle inequality vs Trapezium area",
      hint1: "Triangle condition: sum of any two sides must be strictly greater than the third: (A+B > C) && (A+C > B) && (B+C > A).",
      hint2: "If true, calculate Perimeter = A + B + C and print `Perimetro = %.1lf\\n`.",
      hint3: "Otherwise, calculate Trapezium Area = ((A + B) * C) / 2.0 and print `Area = %.1lf\\n`.",
      solution: `#include <stdio.h>

int main() {
    double A, B, C;
    if (scanf("%lf %lf %lf", &A, &B, &C) == 3) {
        if (A + B > C && A + C > B && B + C > A) {
            printf("Perimetro = %.1lf\\n", A + B + C);
        } else {
            printf("Area = %.1lf\\n", ((A + B) * C) / 2.0);
        }
    }
    return 0;
}`
    },
    {
      id: "C8",
      title: "beecrowd 1036 - Bhaskara's Formula",
      judge: "Beecrowd",
      link: "https://judge.beecrowd.com/en/problems/view/1036",
      category: "Condition (If-else)",
      verdict: "ac",
      solveTime: "15m",
      date: "9/20/2026",
      comment: "Quadratic equation root validation",
      hint1: "Roots impossible if A == 0 or discriminant (B^2 - 4*A*C) < 0.",
      hint2: "If impossible, print 'Impossivel calcular'.",
      hint3: "Otherwise calculate R1 = (-B + sqrt(d)) / (2*A) and R2 = (-B - sqrt(d)) / (2*A) with 5 decimal places.",
      solution: `#include <stdio.h>
#include <math.h>

int main() {
    double A, B, C;
    if (scanf("%lf %lf %lf", &A, &B, &C) == 3) {
        double d = (B * B) - (4.0 * A * C);
        if (A == 0.0 || d < 0.0) {
            printf("Impossivel calcular\\n");
        } else {
            double r1 = (-B + sqrt(d)) / (2.0 * A);
            double r2 = (-B - sqrt(d)) / (2.0 * A);
            printf("R1 = %.5lf\\n", r1);
            printf("R2 = %.5lf\\n", r2);
        }
    }
    return 0;
}`
    },
    {
      id: "C9",
      title: "Codeforces 219158/J - Multiples",
      judge: "Codeforces",
      link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/J",
      category: "Condition (If-else)",
      verdict: "ac",
      solveTime: "15m",
      date: "9/20/2026",
      comment: "Print Multiples or No Multiples",
      hint1: "Given two numbers A and B.",
      hint2: "Check if either divides the other without remainder.",
      hint3: "Print 'Multiples' if true, else 'No Multiples'.",
      solution: `#include <stdio.h>

int main() {
    int A, B;
    if (scanf("%d %d", &A, &B) == 2) {
        if (A % B == 0 || B % A == 0) {
            printf("Multiples\\n");
        } else {
            printf("No Multiples\\n");
        }
    }
    return 0;
}`
    },
    {
      id: "C10",
      title: "Codeforces 219158/P - First digit !",
      judge: "Codeforces",
      link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/P",
      category: "Condition (If-else)",
      verdict: "ac",
      solveTime: "10m",
      date: "9/9/2026",
      comment: "Check parity of first digit of a 4-digit number",
      hint1: "X is a number between 1000 and 9999.",
      hint2: "How to extract the first digit? Integer division: `first = X / 1000`.",
      hint3: "Check if `first % 2 == 0`. Print 'EVEN' or 'ODD'.",
      solution: `#include <stdio.h>

int main() {
    int X;
    if (scanf("%d", &X) == 1) {
        int first = X / 1000;
        if (first % 2 == 0) {
            printf("EVEN\\n");
        } else {
            printf("ODD\\n");
        }
    }
    return 0;
}`
    },
    {
      id: "C11",
      title: "Codeforces 219158/R - Age in Days",
      judge: "Codeforces",
      link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/R",
      category: "Library Function",
      verdict: "ac",
      solveTime: "25m",
      date: "9/10/2026",
      comment: "Years, months, days output formatting",
      hint1: "Given N days, 1 year = 365 days, 1 month = 30 days.",
      hint2: "Calculate years, remaining days, months, and days.",
      hint3: "Format with exact labels: `years`, `months`, `days`.",
      solution: `#include <stdio.h>

int main() {
    int N;
    if (scanf("%d", &N) == 1) {
        int y = N / 365;
        int rem = N % 365;
        int m = rem / 30;
        int d = rem % 30;
        printf("%d years\\n%d months\\n%d days\\n", y, m, d);
    }
    return 0;
}`
    },
    {
      id: "C12",
      title: "Codeforces 219158/S - Interval",
      judge: "Codeforces",
      link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/S",
      category: "Condition (If-else)",
      verdict: "ac",
      solveTime: "20m",
      date: "9/21/2026",
      comment: "[0,25], (25,50], (50,75], (75,100]",
      hint1: "Determine which interval number X falls into.",
      hint2: "Notice inclusion/exclusion: [0,25] includes 0 and 25, while (25,50] does NOT include 25 but includes 50.",
      hint3: "If outside [0, 100], print 'Out of Intervals'.",
      solution: `#include <stdio.h>

int main() {
    double X;
    if (scanf("%lf", &X) == 1) {
        if (X >= 0.0 && X <= 25.0) {
            printf("Interval [0,25]\\n");
        } else if (X > 25.0 && X <= 50.0) {
            printf("Interval (25,50]\\n");
        } else if (X > 50.0 && X <= 75.0) {
            printf("Interval (50,75]\\n");
        } else if (X > 75.0 && X <= 100.0) {
            printf("Interval (75,100]\\n");
        } else {
            printf("Out of Intervals\\n");
        }
    }
    return 0;
}`
    },
    {
      id: "C13",
      title: "Codeforces 219158/T - Sort Numbers",
      judge: "Codeforces",
      link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/T",
      category: "Condition (If-else)",
      verdict: "ac",
      solveTime: "23m",
      date: "9/11/2026",
      comment: "Sort 3 numbers ascending and print original order",
      hint1: "Store original A, B, C values.",
      hint2: "Find min, mid, and max among the three numbers using conditional comparisons or swaps.",
      hint3: "Print sorted values, an empty blank line, then the original sequence.",
      solution: `#include <stdio.h>

int main() {
    int a, b, c;
    if (scanf("%d %d %d", &a, &b, &c) == 3) {
        int x = a, y = b, z = c;
        if (x > y) { int t = x; x = y; y = t; }
        if (x > z) { int t = x; x = z; z = t; }
        if (y > z) { int t = y; y = z; z = t; }

        printf("%d\\n%d\\n%d\\n\\n", x, y, z);
        printf("%d\\n%d\\n%d\\n", a, b, c);
    }
    return 0;
}`
    },
    {
      id: "C14",
      title: "beecrowd 1046 - Game Time",
      judge: "Beecrowd",
      link: "https://judge.beecrowd.com/en/problems/view/1046",
      category: "Condition (If-else)",
      verdict: "ac",
      solveTime: "35m",
      date: "9/13/2026",
      comment: "Start and end hour. Game duration min 1h, max 24h",
      hint1: "If start == end, duration is exactly 24 hours.",
      hint2: "If start < end, duration is `end - start`.",
      hint3: "If start > end (crosses midnight), duration is `(24 - start) + end`.",
      solution: `#include <stdio.h>

int main() {
    int start, end, dur;
    if (scanf("%d %d", &start, &end) == 2) {
        if (start == end) {
            dur = 24;
        } else if (start < end) {
            dur = end - start;
        } else {
            dur = (24 - start) + end;
        }
        printf("O JOGO DUROU %d HORA(S)\\n", dur);
    }
    return 0;
}`
    },
    {
      id: "C15",
      title: "Codeforces 219158/X - Two intervals",
      judge: "Codeforces",
      link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/X",
      category: "Condition (If-else)",
      verdict: "todo",
      solveTime: "20m",
      date: "9/13/2026",
      comment: "Intersection of [l1, r1] and [l2, r2]",
      hint1: "Interval 1 is [l1, r1] and Interval 2 is [l2, r2].",
      hint2: "Intersection start = max(l1, l2), intersection end = min(r1, r2).",
      hint3: "If start <= end, print `start end`. Otherwise print -1.",
      solution: `#include <stdio.h>

int main() {
    long long l1, r1, l2, r2;
    if (scanf("%lld %lld %lld %lld", &l1, &r1, &l2, &r2) == 4) {
        long long start = (l1 > l2) ? l1 : l2;
        long long end = (r1 < r2) ? r1 : r2;
        if (start <= end) {
            printf("%lld %lld\\n", start, end);
        } else {
            printf("-1\\n");
        }
    }
    return 0;
}`
    },
    {
      id: "C16",
      title: "beecrowd 1037 - Interval",
      judge: "Beecrowd",
      link: "https://judge.beecrowd.com/en/problems/view/1037",
      category: "Condition (If-else)",
      verdict: "ac",
      solveTime: "25m",
      date: "9/8/2026",
      comment: "Interval determination in Portuguese",
      hint1: "Same interval ranges as CF problem S.",
      hint2: "Labels: Intervalo [0,25], Intervalo (25,50], Intervalo (50,75], Intervalo (75,100].",
      hint3: "If out of range, print 'Fora de intervalo'.",
      solution: `#include <stdio.h>

int main() {
    double n;
    if (scanf("%lf", &n) == 1) {
        if (n >= 0.0 && n <= 25.0) {
            printf("Intervalo [0,25]\\n");
        } else if (n > 25.0 && n <= 50.0) {
            printf("Intervalo (25,50]\\n");
        } else if (n > 50.0 && n <= 75.0) {
            printf("Intervalo (50,75]\\n");
        } else if (n > 75.0 && n <= 100.0) {
            printf("Intervalo (75,100]\\n");
        } else {
            printf("Fora de intervalo\\n");
        }
    }
    return 0;
}`
    },
    {
      id: "C17",
      title: "Codeforces 219158/K - Max and Min",
      judge: "Codeforces",
      link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/K",
      category: "Nested Condition",
      verdict: "ac",
      solveTime: "15m",
      date: "9/10/2026",
      comment: "Find minimum and maximum of 3 numbers",
      hint1: "Read 3 numbers A, B, C.",
      hint2: "Find min: start with min = A; if B < min, min = B; if C < min, min = C.",
      hint3: "Find max similarly, then print `min max`.",
      solution: `#include <stdio.h>

int main() {
    int a, b, c;
    if (scanf("%d %d %d", &a, &b, &c) == 3) {
        int min = a;
        if (b < min) min = b;
        if (c < min) min = c;

        int max = a;
        if (b > max) max = b;
        if (c > max) max = c;

        printf("%d %d\\n", min, max);
    }
    return 0;
}`
    },
    {
      id: "C18",
      title: "Codeforces 219158/T - Sort Numbers (Nested)",
      judge: "Codeforces",
      link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/T",
      category: "Nested Condition",
      verdict: "ac",
      solveTime: "10m",
      date: "9/24/2026",
      comment: "Sorting using nested conditions",
      hint1: "Explore all permutations with nested `if (a <= b)` branches.",
      hint2: "Print ascending order first, then blank line, then initial inputs.",
      hint3: "Keep original variables untouched.",
      solution: `#include <stdio.h>

int main() {
    int a, b, c;
    if (scanf("%d %d %d", &a, &b, &c) == 3) {
        int x = a, y = b, z = c;
        if (x > y) { int t = x; x = y; y = t; }
        if (x > z) { int t = x; x = z; z = t; }
        if (y > z) { int t = y; y = z; z = t; }
        printf("%d\\n%d\\n%d\\n\\n%d\\n%d\\n%d\\n", x, y, z, a, b, c);
    }
    return 0;
}`
    },
    {
      id: "C19",
      title: "beecrowd 1040 - Average 3",
      judge: "Beecrowd",
      link: "https://judge.beecrowd.com/en/problems/view/1040",
      category: "Nested Condition",
      verdict: "ac",
      solveTime: "18m",
      date: "9/24/2026",
      comment: "Weights 2, 3, 4, 1 and exam retake logic",
      hint1: "Weights: 2, 3, 4, 1 (total = 10.0). Average = (N1*2 + N2*3 + N3*4 + N4*1)/10.0.",
      hint2: "If avg >= 7.0 -> 'Aluno aprovado.'. If avg < 5.0 -> 'Aluno reprovado.'.",
      hint3: "If between 5.0 and 6.9, read exam score. New avg = (avg + exam)/2.0. If >= 5.0 approved, else reproved.",
      solution: `#include <stdio.h>

int main() {
    float n1, n2, n3, n4;
    if (scanf("%f %f %f %f", &n1, &n2, &n3, &n4) == 4) {
        float avg = (n1 * 2 + n2 * 3 + n3 * 4 + n4 * 1) / 10.0;
        printf("Media: %.1f\\n", avg);
        if (avg >= 7.0) {
            printf("Aluno aprovado.\\n");
        } else if (avg < 5.0) {
            printf("Aluno reprovado.\\n");
        } else {
            printf("Aluno em exame.\\n");
            float exam;
            if (scanf("%f", &exam) == 1) {
                printf("Nota do exame: %.1f\\n", exam);
                float final_avg = (avg + exam) / 2.0;
                if (final_avg >= 5.0) {
                    printf("Aluno aprovado.\\n");
                } else {
                    printf("Aluno reprovado.\\n");
                }
                printf("Media final: %.1f\\n", final_avg);
            }
        }
    }
    return 0;
}`
    },
    {
      id: "C20",
      title: "Codeforces 219158/U - Float or int",
      judge: "Codeforces",
      link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/U",
      category: "Nested Condition",
      verdict: "todo",
      solveTime: "15m",
      date: "9/24/2026",
      comment: "Check whether a floating point number has fractional part == 0",
      hint1: "Read number as `double N`.",
      hint2: "Integer part is `(int)N`. Fractional part is `N - (int)N`.",
      hint3: "If fractional part == 0, print `int %d\\n`. Else print `float %d %.3lf\\n`.",
      solution: `#include <stdio.h>

int main() {
    double N;
    if (scanf("%lf", &N) == 1) {
        int int_part = (int)N;
        double frac_part = N - int_part;
        if (frac_part == 0.0) {
            printf("int %d\\n", int_part);
        } else {
            printf("float %d %.3lf\\n", int_part, frac_part);
        }
    }
    return 0;
}`
    },
    {
      id: "C21",
      title: "beecrowd 1042 - Simple Sort",
      judge: "Beecrowd",
      link: "https://judge.beecrowd.com/en/problems/view/1042",
      category: "Nested Condition",
      verdict: "todo",
      solveTime: "12m",
      date: "9/24/2026",
      comment: "Read 3 integers and sort them ascending",
      hint1: "Identical logic to CF Sort Numbers.",
      hint2: "Print sorted 3 numbers in ascending order, one per line.",
      hint3: "Print an empty line, then print 3 numbers in original order.",
      solution: `#include <stdio.h>

int main() {
    int a, b, c;
    if (scanf("%d %d %d", &a, &b, &c) == 3) {
        int x = a, y = b, z = c;
        if (x > y) { int t = x; x = y; y = t; }
        if (x > z) { int t = x; x = z; z = t; }
        if (y > z) { int t = y; y = z; z = t; }
        printf("%d\\n%d\\n%d\\n\\n%d\\n%d\\n%d\\n", x, y, z, a, b, c);
    }
    return 0;
}`
    },
    {
      id: "C22",
      title: "beecrowd 1045 - Triangle Types",
      judge: "Beecrowd",
      link: "https://judge.beecrowd.com/en/problems/view/1045",
      category: "Nested Condition",
      verdict: "todo",
      solveTime: "25m",
      date: "9/24/2026",
      comment: "Sort A >= B >= C, then check right, acute, obtuse, equilateral, isosceles",
      hint1: "First arrange A >= B >= C descending.",
      hint2: "If A >= B + C: NAO FORMA TRIANGULO.",
      hint3: "Else check: A^2 == B^2 + C^2 (RETANGULO), A^2 > B^2 + C^2 (OBTUSANGULO), A^2 < B^2 + C^2 (ACUTANGULO). Also check EQUILATERO and ISOSCELES.",
      solution: `#include <stdio.h>

int main() {
    double a, b, c;
    if (scanf("%lf %lf %lf", &a, &b, &c) == 3) {
        // Sort descending: A >= B >= C
        if (a < b) { double t = a; a = b; b = t; }
        if (a < c) { double t = a; a = c; c = t; }
        if (b < c) { double t = b; b = c; c = t; }

        if (a >= b + c) {
            printf("NAO FORMA TRIANGULO\\n");
        } else {
            if (a * a == b * b + c * c) printf("TRIANGULO RETANGULO\\n");
            else if (a * a > b * b + c * c) printf("TRIANGULO OBTUSANGULO\\n");
            else if (a * a < b * b + c * c) printf("TRIANGULO ACUTANGULO\\n");

            if (a == b && b == c) {
                printf("TRIANGULO EQUILATERO\\n");
            } else if (a == b || b == c || a == c) {
                printf("TRIANGULO ISOSCELES\\n");
            }
        }
    }
    return 0;
}`
    },
    {
      id: "C23",
      title: "beecrowd 1047 - Game Time with Minutes",
      judge: "Beecrowd",
      link: "https://judge.beecrowd.com/en/problems/view/1047",
      category: "Nested Condition",
      verdict: "ac",
      solveTime: "35m",
      date: "9/14/2026",
      comment: "Convert both times to total minutes from 00:00!",
      hint1: "Best trick: Convert start time to total minutes: `start = h1 * 60 + m1`.",
      hint2: "Convert end time to total minutes: `end = h2 * 60 + m2`.",
      hint3: "If `end <= start`, add 24*60 (1440 mins). Duration in hours = diff / 60, minutes = diff % 60.",
      solution: `#include <stdio.h>

int main() {
    int h1, m1, h2, m2;
    if (scanf("%d %d %d %d", &h1, &m1, &h2, &m2) == 4) {
        int start = h1 * 60 + m1;
        int end = h2 * 60 + m2;
        int diff = end - start;
        if (diff <= 0) {
            diff += 24 * 60;
        }
        printf("O JOGO DUROU %d HORA(S) E %d MINUTO(S)\\n", diff / 60, diff % 60);
    }
    return 0;
}`
    },
    {
      id: "C24",
      title: "beecrowd 1051 - Taxes",
      judge: "Beecrowd",
      link: "https://judge.beecrowd.com/en/problems/view/1051",
      category: "Nested Condition",
      verdict: "ac",
      solveTime: "20m",
      date: "9/24/2026",
      comment: "Progressive tax brackets: 0%, 8%, 18%, 28%",
      hint1: "Brackets: 0 to 2000 (0%), 2000.01 to 3000 (8%), 3000.01 to 4500 (18%), above 4500 (28%).",
      hint2: "Tax is progressive: only calculate tax for the portion in each bracket.",
      hint3: "If salary <= 2000, print 'Isento'. Else print `R$ %.2lf\\n`.",
      solution: `#include <stdio.h>

int main() {
    double salary, tax = 0.0;
    if (scanf("%lf", &salary) == 1) {
        if (salary <= 2000.00) {
            printf("Isento\\n");
            return 0;
        }
        if (salary > 4500.00) {
            tax += (salary - 4500.00) * 0.28;
            salary = 4500.00;
        }
        if (salary > 3000.00) {
            tax += (salary - 3000.00) * 0.18;
            salary = 3000.00;
        }
        if (salary > 2000.00) {
            tax += (salary - 2000.00) * 0.08;
        }
        printf("R$ %.2lf\\n", tax);
    }
    return 0;
}`
    },
    {
      id: "C25",
      title: "Codeforces 219158/X - Two intervals (Revisited)",
      judge: "Codeforces",
      link: "https://codeforces.com/group/MWSDmqGsZm/contest/219158/problem/X",
      category: "Nested Condition",
      verdict: "ac",
      solveTime: "15m",
      date: "9/24/2026",
      comment: "Boundary checks for overlapping ranges",
      hint1: "Compare l1, r1, l2, r2.",
      hint2: "Overlap starts at max(l1, l2) and ends at min(r1, r2).",
      hint3: "Check if start <= end.",
      solution: `#include <stdio.h>

int main() {
    long long l1, r1, l2, r2;
    if (scanf("%lld %lld %lld %lld", &l1, &r1, &l2, &r2) == 4) {
        long long s = (l1 > l2) ? l1 : l2;
        long long e = (r1 < r2) ? r1 : r2;
        if (s <= e) printf("%lld %lld\\n", s, e);
        else printf("-1\\n");
    }
    return 0;
}`
    },
    {
      id: "C26",
      title: "beecrowd 1059 - Even Numbers",
      judge: "Beecrowd",
      link: "https://judge.beecrowd.com/en/problems/view/1059",
      category: "Nested Condition",
      verdict: "ac",
      solveTime: "5m",
      date: "9/24/2026",
      comment: "Print all even numbers between 1 and 100",
      hint1: "Start loop at 2 and step by 2 up to 100.",
      hint2: "No input is needed.",
      hint3: "`for (int i = 2; i <= 100; i += 2) printf(\"%d\\n\", i);`.",
      solution: `#include <stdio.h>

int main() {
    for (int i = 2; i <= 100; i += 2) {
        printf("%d\\n", i);
    }
    return 0;
}`
    },
    {
      id: "C27",
      title: "beecrowd 1060 - Positive Numbers",
      judge: "Beecrowd",
      link: "https://judge.beecrowd.com/en/problems/view/1060",
      category: "Nested Condition",
      verdict: "ac",
      solveTime: "8m",
      date: "9/24/2026",
      comment: "Count positive numbers among 6 inputs",
      hint1: "Read 6 floating point values.",
      hint2: "Maintain a counter: if value > 0, counter++.",
      hint3: "Print `%d valores positivos\\n`.",
      solution: `#include <stdio.h>

int main() {
    double val;
    int count = 0;
    for (int i = 0; i < 6; i++) {
        if (scanf("%lf", &val) == 1) {
            if (val > 0.0) count++;
        }
    }
    printf("%d valores positivos\\n", count);
    return 0;
}`
    },
    {
      id: "C28",
      title: "beecrowd 1066 - Even, Odd, Positive and Negative",
      judge: "Beecrowd",
      link: "https://judge.beecrowd.com/en/problems/view/1066",
      category: "Nested Condition",
      verdict: "todo",
      solveTime: "15m",
      date: "9/24/2026",
      comment: "Categorize 5 integers into even, odd, pos, neg",
      hint1: "Read 5 integer values.",
      hint2: "Count even if `abs(val) % 2 == 0`, else odd.",
      hint3: "Count positive if `val > 0`, negative if `val < 0`. Note: 0 is neither positive nor negative!",
      solution: `#include <stdio.h>
#include <stdlib.h>

int main() {
    int val, even = 0, odd = 0, pos = 0, neg = 0;
    for (int i = 0; i < 5; i++) {
        if (scanf("%d", &val) == 1) {
            if (abs(val) % 2 == 0) even++;
            else odd++;
            
            if (val > 0) pos++;
            else if (val < 0) neg++;
        }
    }
    printf("%d valor(es) par(es)\\n", even);
    printf("%d valor(es) impar(es)\\n", odd);
    printf("%d valor(es) positivo(s)\\n", pos);
    printf("%d valor(es) negativo(s)\\n", neg);
    return 0;
}`
    },

    // --- SECTION 3: LOOPS (L1 - L50) ---
    {
      id: "L1",
      title: "Codeforces 219432/A - 1 to N",
      judge: "Codeforces",
      link: "https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/A",
      category: "Loop",
      verdict: "todo",
      solveTime: "5m",
      date: "9/25/2026",
      comment: "Print 1 to N each on a new line",
      hint1: "Read integer N.",
      hint2: "Use a loop from i = 1 to N.",
      hint3: "Print `i` followed by `\\n`.",
      solution: `#include <stdio.h>

int main() {
    int N;
    if (scanf("%d", &N) == 1) {
        for (int i = 1; i <= N; i++) {
            printf("%d\\n", i);
        }
    }
    return 0;
}`
    },
    {
      id: "L2",
      title: "HackerRank - Backwards Printing",
      judge: "HackerRank",
      link: "https://www.hackerrank.com/contests/loops-and-nested-loops/challenges/backwards-printing",
      category: "Loop",
      verdict: "todo",
      solveTime: "5m",
      date: "9/25/2026",
      comment: "Print numbers in reverse from N down to 1",
      hint1: "Initialize loop at N.",
      hint2: "Loop condition: `i >= 1`.",
      hint3: "Decrement: `i--`.",
      solution: `#include <stdio.h>

int main() {
    int N;
    if (scanf("%d", &N) == 1) {
        for (int i = N; i >= 1; i--) {
            printf("%d ", i);
        }
        printf("\\n");
    }
    return 0;
}`
    },
    {
      id: "L3",
      title: "HackerRank - Even Printer",
      judge: "HackerRank",
      link: "https://www.hackerrank.com/contests/loops-and-nested-loops/challenges/even-printer",
      category: "Loop",
      verdict: "todo",
      solveTime: "5m",
      date: "9/25/2026",
      comment: "Print all even numbers up to N",
      hint1: "Iterate from 2 up to N by steps of 2.",
      hint2: "Check if N < 2: if so, handle properly.",
      hint3: "Print values space or newline separated as required.",
      solution: `#include <stdio.h>

int main() {
    int N;
    if (scanf("%d", &N) == 1) {
        for (int i = 2; i <= N; i += 2) {
            printf("%d ", i);
        }
        printf("\\n");
    }
    return 0;
}`
    },
    {
      id: "L4",
      title: "HackerRank - Summation 1 to N",
      judge: "HackerRank",
      link: "https://www.hackerrank.com/contests/loops-and-nested-loops/challenges/summation-28",
      category: "Loop",
      verdict: "todo",
      solveTime: "5m",
      date: "9/25/2026",
      comment: "Sum numbers from 1 to N",
      hint1: "Initialize `long long sum = 0;`.",
      hint2: "Add each `i` in loop, or use `N * (N + 1) / 2`.",
      hint3: "Print the total sum.",
      solution: `#include <stdio.h>

int main() {
    long long N, sum = 0;
    if (scanf("%lld", &N) == 1) {
        sum = N * (N + 1) / 2;
        printf("%lld\\n", sum);
    }
    return 0;
}`
    },
    {
      id: "L5",
      title: "beecrowd 1153 - Simple Factorial",
      judge: "Beecrowd",
      link: "https://judge.beecrowd.com/en/problems/view/1153",
      category: "Loop",
      verdict: "todo",
      solveTime: "6m",
      date: "9/25/2026",
      comment: "Factorial of N (0 < N < 13)",
      hint1: "Factorial N! = N * (N - 1) * ... * 1.",
      hint2: "Initialize `fact = 1`.",
      hint3: "Loop from 1 to N multiplying `fact *= i`.",
      solution: `#include <stdio.h>

int main() {
    int N;
    if (scanf("%d", &N) == 1) {
        long long fact = 1;
        for (int i = 1; i <= N; i++) {
            fact *= i;
        }
        printf("%lld\\n", fact);
    }
    return 0;
}`
    },
    {
      id: "L6",
      title: "HackerRank - Print Range",
      judge: "HackerRank",
      link: "https://www.hackerrank.com/contests/loops-and-nested-loops/challenges/print-range-1",
      category: "Loop",
      verdict: "todo",
      solveTime: "5m",
      date: "9/25/2026",
      comment: "Print numbers from A to B",
      hint1: "Given start A and end B.",
      hint2: "Handle both ascending (A <= B) and descending (A > B) if required.",
      hint3: "Loop from A to B printing each value.",
      solution: `#include <stdio.h>

int main() {
    int A, B;
    if (scanf("%d %d", &A, &B) == 2) {
        if (A <= B) {
            for (int i = A; i <= B; i++) printf("%d ", i);
        } else {
            for (int i = A; i >= B; i--) printf("%d ", i);
        }
        printf("\\n");
    }
    return 0;
}`
    },
    {
      id: "L7",
      title: "HackerRank - Print Odd numbers",
      judge: "HackerRank",
      link: "https://www.hackerrank.com/contests/loops-and-nested-loops/challenges/odd-number-5-1",
      category: "Loop",
      verdict: "todo",
      solveTime: "5m",
      date: "9/25/2026",
      comment: "Print odd numbers up to N",
      hint1: "Start at 1, step by 2 up to N.",
      hint2: "Or loop all i and check `if (i % 2 != 0)`.",
      hint3: "Print numbers.",
      solution: `#include <stdio.h>

int main() {
    int N;
    if (scanf("%d", &N) == 1) {
        for (int i = 1; i <= N; i += 2) {
            printf("%d ", i);
        }
        printf("\\n");
    }
    return 0;
}`
    },
    {
      id: "L8",
      title: "HackerRank - Divisible by 5",
      judge: "HackerRank",
      link: "https://www.hackerrank.com/contests/loops-and-nested-loops/challenges/divisible-by-5-2-2",
      category: "Loop",
      verdict: "todo",
      solveTime: "5m",
      date: "9/25/2026",
      comment: "Print numbers divisible by 5 in range",
      hint1: "Condition for divisibility by 5: `i % 5 == 0`.",
      hint2: "Loop through range and test each number.",
      hint3: "Print matching values.",
      solution: `#include <stdio.h>

int main() {
    int N;
    if (scanf("%d", &N) == 1) {
        for (int i = 5; i <= N; i += 5) {
            printf("%d ", i);
        }
        printf("\\n");
    }
    return 0;
}`
    },
    {
      id: "L9",
      title: "HackerRank - Divisibility by 5 and 7",
      judge: "HackerRank",
      link: "https://www.hackerrank.com/contests/loops-and-nested-loops/challenges/divisibility-by-5-and-7",
      category: "Loop",
      verdict: "todo",
      solveTime: "8m",
      date: "9/25/2026",
      comment: "Count numbers divisible by 5 or 7",
      hint1: "Check if `(i % 5 == 0 || i % 7 == 0)`.",
      hint2: "Increment a counter when condition matches.",
      hint3: "Print total count.",
      solution: `#include <stdio.h>

int main() {
    int N, count = 0;
    if (scanf("%d", &N) == 1) {
        for (int i = 1; i <= N; i++) {
            if (i % 5 == 0 || i % 7 == 0) {
                count++;
            }
        }
        printf("%d\\n", count);
    }
    return 0;
}`
    },
    {
      id: "L10",
      title: "beecrowd 1072 - Interval 2",
      judge: "Beecrowd",
      link: "https://judge.beecrowd.com/en/problems/view/1072",
      category: "Loop",
      verdict: "todo",
      solveTime: "8m",
      date: "9/25/2026",
      comment: "Count numbers in [10, 20] and out of [10, 20]",
      hint1: "First read N (number of test cases).",
      hint2: "For each X: if `X >= 10 && X <= 20`, in++, else out++.",
      hint3: "Print `%d in\\n%d out\\n`.",
      solution: `#include <stdio.h>

int main() {
    int N, X, in = 0, out = 0;
    if (scanf("%d", &N) == 1) {
        while (N--) {
            scanf("%d", &X);
            if (X >= 10 && X <= 20) in++;
            else out++;
        }
        printf("%d in\\n%d out\\n", in, out);
    }
    return 0;
}`
    },
    {
      id: "L11",
      title: "beecrowd 1075 - Remaining 2",
      judge: "Beecrowd",
      link: "https://judge.beecrowd.com/en/problems/view/1075",
      category: "Loop",
      verdict: "todo",
      solveTime: "6m",
      date: "9/25/2026",
      comment: "Print numbers between 1 and 10000 where i % N == 2",
      hint1: "Read integer N.",
      hint2: "Loop `i` from 1 to 10000.",
      hint3: "If `i % N == 2`, print `i`.",
      solution: `#include <stdio.h>

int main() {
    int N;
    if (scanf("%d", &N) == 1) {
        for (int i = 1; i <= 10000; i++) {
            if (i % N == 2) {
                printf("%d\\n", i);
            }
        }
    }
    return 0;
}`
    },
    {
      id: "L12",
      title: "HackerRank - Series Printing 2",
      judge: "HackerRank",
      link: "https://www.hackerrank.com/contests/loops-and-nested-loops/challenges/series-printing-2",
      category: "Loop",
      verdict: "todo",
      solveTime: "8m",
      date: "9/25/2026",
      comment: "Mathematical series sequence generation",
      hint1: "Observe the pattern between consecutive terms.",
      hint2: "Determine common difference or ratio.",
      hint3: "Generate terms inside loop.",
      solution: `#include <stdio.h>

int main() {
    int n;
    if (scanf("%d", &n) == 1) {
        for (int i = 1; i <= n; i++) {
            printf("%d ", i * i); // quadratic series sample
        }
        printf("\\n");
    }
    return 0;
}`
    },
    {
      id: "L13",
      title: "Codeforces 219432/F - Multiplication Table",
      judge: "Codeforces",
      link: "https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/F",
      category: "Loop",
      verdict: "todo",
      solveTime: "5m",
      date: "9/25/2026",
      comment: "Print table from 1 to 12 for N",
      hint1: "Read N.",
      hint2: "Loop `i` from 1 to 12.",
      hint3: "Print `%d * %d = %d\\n`.",
      solution: `#include <stdio.h>

int main() {
    int N;
    if (scanf("%d", &N) == 1) {
        for (int i = 1; i <= 12; i++) {
            printf("%d * %d = %d\\n", N, i, N * i);
        }
    }
    return 0;
}`
    },
    {
      id: "L14",
      title: "HackerRank - 2 to the power division",
      judge: "HackerRank",
      link: "https://www.hackerrank.com/contests/loops-and-nested-loops/challenges/2-to-the-power-division",
      category: "Loop",
      verdict: "todo",
      solveTime: "8m",
      date: "9/25/2026",
      comment: "Repeated division by powers of 2",
      hint1: "Divide number by 2 repeatedly while divisible or until N iterations.",
      hint2: "Count powers or remainder.",
      hint3: "Print result.",
      solution: `#include <stdio.h>

int main() {
    long long N;
    if (scanf("%lld", &N) == 1) {
        int count = 0;
        while (N > 0 && N % 2 == 0) {
            count++;
            N /= 2;
        }
        printf("%d\\n", count);
    }
    return 0;
}`
    },
    {
      id: "L15",
      title: "Codeforces 219432/K - Divisors",
      judge: "Codeforces",
      link: "https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/K",
      category: "Loop",
      verdict: "todo",
      solveTime: "6m",
      date: "9/25/2026",
      comment: "Print all divisors of N in ascending order",
      hint1: "A number `i` is a divisor of N if `N % i == 0`.",
      hint2: "Loop `i` from 1 to N.",
      hint3: "If `N % i == 0`, print `i`.",
      solution: `#include <stdio.h>

int main() {
    int N;
    if (scanf("%d", &N) == 1) {
        for (int i = 1; i <= N; i++) {
            if (N % i == 0) {
                printf("%d\\n", i);
            }
        }
    }
    return 0;
}`
    },
    {
      id: "L16",
      title: "beecrowd 1070 - Six Odd Numbers",
      judge: "Beecrowd",
      link: "https://judge.beecrowd.com/en/problems/view/1070",
      category: "Loop",
      verdict: "todo",
      solveTime: "6m",
      date: "9/25/2026",
      comment: "Print next 6 consecutive odd numbers starting from X",
      hint1: "Read X.",
      hint2: "If X is even, start at X + 1, else start at X.",
      hint3: "Print 6 numbers, incrementing by 2 each step.",
      solution: `#include <stdio.h>

int main() {
    int X;
    if (scanf("%d", &X) == 1) {
        if (X % 2 == 0) X++;
        for (int i = 0; i < 6; i++) {
            printf("%d\\n", X + i * 2);
        }
    }
    return 0;
}`
    },
    {
      id: "L17",
      title: "HackerRank - A to the power B",
      judge: "HackerRank",
      link: "https://www.hackerrank.com/contests/loops-and-nested-loops/challenges/a-to-the-power-b",
      category: "Loop",
      verdict: "todo",
      solveTime: "6m",
      date: "9/25/2026",
      comment: "Compute A^B using a loop",
      hint1: "Initialize `long long ans = 1;`.",
      hint2: "Multiply `ans *= A` in a loop running B times.",
      hint3: "Print `ans`.",
      solution: `#include <stdio.h>

int main() {
    long long A, B;
    if (scanf("%lld %lld", &A, &B) == 2) {
        long long ans = 1;
        for (int i = 0; i < B; i++) {
            ans *= A;
        }
        printf("%lld\\n", ans);
    }
    return 0;
}`
    },
    {
      id: "L18",
      title: "beecrowd 1155 - Sequence S",
      judge: "Beecrowd",
      link: "https://judge.beecrowd.com/en/problems/view/1155",
      category: "Loop",
      verdict: "todo",
      solveTime: "6m",
      date: "9/25/2026",
      comment: "S = 1 + 1/2 + 1/3 + ... + 1/100",
      hint1: "Harmonic sum series up to 100.",
      hint2: "Use `double S = 0.0` and loop `i = 1 to 100` adding `1.0 / i`.",
      hint3: "Format: `%.2lf\\n`.",
      solution: `#include <stdio.h>

int main() {
    double S = 0.0;
    for (int i = 1; i <= 100; i++) {
        S += 1.0 / i;
    }
    printf("%.2lf\\n", S);
    return 0;
}`
    },
    {
      id: "L19",
      title: "beecrowd 1156 - Sequence S II",
      judge: "Beecrowd",
      link: "https://judge.beecrowd.com/en/problems/view/1156",
      category: "Loop",
      verdict: "todo",
      solveTime: "8m",
      date: "9/25/2026",
      comment: "S = 1 + 3/2 + 5/4 + 7/8 + ... + 39/?",
      hint1: "Numerator increases by 2: 1, 3, 5, ..., 39.",
      hint2: "Denominator doubles: 1, 2, 4, 8, ...",
      hint3: "Add `num / den` and print with 2 decimal places.",
      solution: `#include <stdio.h>

int main() {
    double S = 1.0;
    double den = 2.0;
    for (int num = 3; num <= 39; num += 2) {
        S += num / den;
        den *= 2.0;
    }
    printf("%.2lf\\n", S);
    return 0;
}`
    },
    {
      id: "L20",
      title: "Codeforces 219432/B - Even Numbers",
      judge: "Codeforces",
      link: "https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/B",
      category: "Loop",
      verdict: "todo",
      solveTime: "5m",
      date: "9/25/2026",
      comment: "Print even numbers between 1 and N or -1 if none",
      hint1: "If N < 2, there are no even numbers, print -1.",
      hint2: "Otherwise, loop from 2 to N by 2.",
      hint3: "Print each even number on a new line.",
      solution: `#include <stdio.h>

int main() {
    int N;
    if (scanf("%d", &N) == 1) {
        if (N < 2) {
            printf("-1\\n");
        } else {
            for (int i = 2; i <= N; i += 2) {
                printf("%d\\n", i);
            }
        }
    }
    return 0;
}`
    },
    {
      id: "L21",
      title: "Codeforces 219432/C - Even, Odd, Positive and Negative",
      judge: "Codeforces",
      link: "https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/C",
      category: "Loop",
      verdict: "todo",
      solveTime: "10m",
      date: "9/25/2026",
      comment: "Categorize N integers into Even, Odd, Positive, Negative",
      hint1: "Read N, then loop N times reading each number.",
      hint2: "Check `x % 2 == 0` for even, else odd.",
      hint3: "Check `x > 0` for positive, `x < 0` for negative.",
      solution: `#include <stdio.h>

int main() {
    int N, x, even = 0, odd = 0, pos = 0, neg = 0;
    if (scanf("%d", &N) == 1) {
        for (int i = 0; i < N; i++) {
            scanf("%d", &x);
            if (x % 2 == 0) even++;
            else odd++;
            if (x > 0) pos++;
            else if (x < 0) neg++;
        }
        printf("Even: %d\\nOdd: %d\\nPositive: %d\\nNegative: %d\\n", even, odd, pos, neg);
    }
    return 0;
}`
    },
    {
      id: "L22",
      title: "Codeforces 219432/V - PUM",
      judge: "Codeforces",
      link: "https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/V",
      category: "Loop",
      verdict: "todo",
      solveTime: "8m",
      date: "9/25/2026",
      comment: "Print N lines: 3 numbers then 'PUM'",
      hint1: "For each line `i` (from 1 to N), start number is `(i - 1) * 4 + 1`.",
      hint2: "Print `start, start+1, start+2, PUM`.",
      hint3: "Each line has 4 tokens.",
      solution: `#include <stdio.h>

int main() {
    int N;
    if (scanf("%d", &N) == 1) {
        int cur = 1;
        for (int i = 0; i < N; i++) {
            printf("%d %d %d PUM\\n", cur, cur + 1, cur + 2);
            cur += 4;
        }
    }
    return 0;
}`
    },
    {
      id: "L23",
      title: "Codeforces 219432/L - GCD",
      judge: "Codeforces",
      link: "https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/L",
      category: "Loop",
      verdict: "todo",
      solveTime: "8m",
      date: "9/25/2026",
      comment: "Greatest Common Divisor using Euclidean algorithm",
      hint1: "Euclidean algorithm: while `b != 0`, `temp = b; b = a % b; a = temp;`.",
      hint2: "When loop terminates, `a` is the GCD.",
      hint3: "Runs in logarithmic time.",
      solution: `#include <stdio.h>

int main() {
    int a, b;
    if (scanf("%d %d", &a, &b) == 2) {
        while (b != 0) {
            int rem = a % b;
            a = b;
            b = rem;
        }
        printf("%d\\n", a);
    }
    return 0;
}`
    },
    {
      id: "L24",
      title: "Codeforces 219432/H - One Prime",
      judge: "Codeforces",
      link: "https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/H",
      category: "Loop",
      verdict: "todo",
      solveTime: "12m",
      date: "9/25/2026",
      comment: "Prime check using square root optimization",
      hint1: "A number <= 1 is never prime.",
      hint2: "Check if any integer from 2 up to `sqrt(X)` divides X.",
      hint3: "If divisor found, flag = false and break. Print 'YES' or 'NO'.",
      solution: `#include <stdio.h>

int main() {
    long long X;
    if (scanf("%lld", &X) == 1) {
        if (X <= 1) {
            printf("NO\\n");
            return 0;
        }
        int isPrime = 1;
        for (long long i = 2; i * i <= X; i++) {
            if (X % i == 0) {
                isPrime = 0;
                break;
            }
        }
        if (isPrime) printf("YES\\n");
        else printf("NO\\n");
    }
    return 0;
}`
    },
    {
      id: "L25",
      title: "HackerRank - Backwards Digits",
      judge: "HackerRank",
      link: "https://www.hackerrank.com/contests/loops-and-nested-loops/challenges/backwards-digits-1",
      category: "Loop",
      verdict: "todo",
      solveTime: "8m",
      date: "9/25/2026",
      comment: "Extract digits from right to left using % 10 and / 10",
      hint1: "To get rightmost digit: `digit = N % 10`.",
      hint2: "To remove rightmost digit: `N /= 10`.",
      hint3: "Repeat while `N > 0`.",
      solution: `#include <stdio.h>

int main() {
    long long N;
    if (scanf("%lld", &N) == 1) {
        if (N == 0) { printf("0\\n"); return 0; }
        while (N > 0) {
            printf("%lld ", N % 10);
            N /= 10;
        }
        printf("\\n");
    }
    return 0;
}`
    },
    {
      id: "L26",
      title: "HackerRank - Concat and Square",
      judge: "HackerRank",
      link: "https://www.hackerrank.com/contests/loops-and-nested-loops/challenges/concat-and-square",
      category: "Loop",
      verdict: "todo",
      solveTime: "10m",
      date: "9/25/2026",
      comment: "String manipulation or integer power concatenation",
      hint1: "Read inputs as strings or integers.",
      hint2: "Concatenate them.",
      hint3: "Compute square using 64-bit integer.",
      solution: `#include <stdio.h>

int main() {
    long long a, b;
    if (scanf("%lld %lld", &a, &b) == 2) {
        long long temp = b, mult = 1;
        if (temp == 0) mult = 10;
        while (temp > 0) { mult *= 10; temp /= 10; }
        long long concat = a * mult + b;
        printf("%lld\\n", concat * concat);
    }
    return 0;
}`
    },
    {
      id: "L27",
      title: "HackerRank - Digit Sum",
      judge: "HackerRank",
      link: "https://www.hackerrank.com/contests/loops-and-nested-loops/challenges/digit-sum-27-3",
      category: "Loop",
      verdict: "todo",
      solveTime: "6m",
      date: "9/25/2026",
      comment: "Sum of digits of N",
      hint1: "Initialize `sum = 0`.",
      hint2: "Add `N % 10` to sum, then `N /= 10`.",
      hint3: "Repeat until N == 0.",
      solution: `#include <stdio.h>

int main() {
    long long N, sum = 0;
    if (scanf("%lld", &N) == 1) {
        if (N < 0) N = -N;
        while (N > 0) {
            sum += N % 10;
            N /= 10;
        }
        printf("%lld\\n", sum);
    }
    return 0;
}`
    },
    {
      id: "L28",
      title: "HackerRank - Lucky Number",
      judge: "HackerRank",
      link: "https://www.hackerrank.com/contests/loops-and-nested-loops/challenges/lucky-number-36-1",
      category: "Loop",
      verdict: "todo",
      solveTime: "10m",
      date: "9/25/2026",
      comment: "Number consisting only of digits 4 and 7",
      hint1: "Check every digit of the number.",
      hint2: "If any digit is not 4 and not 7, it's not lucky.",
      hint3: "Print result.",
      solution: `#include <stdio.h>

int main() {
    long long N;
    if (scanf("%lld", &N) == 1) {
        int lucky = 1;
        long long temp = N;
        while (temp > 0) {
            int d = temp % 10;
            if (d != 4 && d != 7) {
                lucky = 0;
                break;
            }
            temp /= 10;
        }
        if (lucky && N > 0) printf("YES\\n");
        else printf("NO\\n");
    }
    return 0;
}`
    },
    {
      id: "L29",
      title: "HackerRank - Series Sum (9 + 99 + 999...)",
      judge: "HackerRank",
      link: "https://www.hackerrank.com/contests/loops-and-nested-loops/challenges/series-sum-2-2",
      category: "Loop",
      verdict: "todo",
      solveTime: "10m",
      date: "9/25/2026",
      comment: "Term generation: term = term * 10 + 9",
      hint1: "First term is 9.",
      hint2: "Next term is `term = term * 10 + 9`.",
      hint3: "Accumulate sum using `long long`.",
      solution: `#include <stdio.h>

int main() {
    int N;
    if (scanf("%d", &N) == 1) {
        long long term = 9, sum = 0;
        for (int i = 0; i < N; i++) {
            sum += term;
            term = term * 10 + 9;
        }
        printf("%lld\\n", sum);
    }
    return 0;
}`
    },
    {
      id: "L30",
      title: "HackerRank - Find LCM",
      judge: "HackerRank",
      link: "https://www.hackerrank.com/contests/loops-and-nested-loops/challenges/find-lcm-4-2",
      category: "Loop",
      verdict: "todo",
      solveTime: "8m",
      date: "9/25/2026",
      comment: "LCM(a, b) = (a * b) / GCD(a, b)",
      hint1: "First compute GCD using Euclid's algorithm.",
      hint2: "Then LCM = (a / GCD) * b to avoid overflow.",
      hint3: "Print LCM.",
      solution: `#include <stdio.h>

long long gcd(long long a, long long b) {
    while (b != 0) {
        long long r = a % b;
        a = b;
        b = r;
    }
    return a;
}

int main() {
    long long a, b;
    if (scanf("%lld %lld", &a, &b) == 2) {
        long long lcm = (a / gcd(a, b)) * b;
        printf("%lld\\n", lcm);
    }
    return 0;
}`
    },
    {
      id: "L31",
      title: "HackerRank - Collatz (3n + 1)",
      judge: "HackerRank",
      link: "https://www.hackerrank.com/contests/loops-and-nested-loops/challenges/series-printing-2-1",
      category: "Loop",
      verdict: "todo",
      solveTime: "10m",
      date: "9/25/2026",
      comment: "Collatz conjecture sequence generation",
      hint1: "While n != 1: print n.",
      hint2: "If n is even, n = n / 2; if odd, n = 3 * n + 1.",
      hint3: "Print 1 at the end.",
      solution: `#include <stdio.h>

int main() {
    long long n;
    if (scanf("%lld", &n) == 1) {
        while (n != 1) {
            printf("%lld ", n);
            if (n % 2 == 0) n /= 2;
            else n = 3 * n + 1;
        }
        printf("1\\n");
    }
    return 0;
}`
    },
    {
      id: "L32",
      title: "HackerRank - Binary Conversion",
      judge: "HackerRank",
      link: "https://www.hackerrank.com/contests/loops-and-nested-loops/challenges/binary-conversion-6-1",
      category: "Loop",
      verdict: "todo",
      solveTime: "10m",
      date: "9/25/2026",
      comment: "Convert decimal integer to binary representation",
      hint1: "Repeatedly divide by 2 and store remainders (`N % 2`).",
      hint2: "Print remainders in reverse order.",
      hint3: "Special case for 0.",
      solution: `#include <stdio.h>

int main() {
    long long N;
    if (scanf("%lld", &N) == 1) {
        if (N == 0) { printf("0\\n"); return 0; }
        int bits[64], idx = 0;
        while (N > 0) {
            bits[idx++] = N % 2;
            N /= 2;
        }
        for (int i = idx - 1; i >= 0; i--) {
            printf("%d", bits[i]);
        }
        printf("\\n");
    }
    return 0;
}`
    },
    {
      id: "L33",
      title: "HackerRank - Alternating Power Series",
      judge: "HackerRank",
      link: "https://www.hackerrank.com/contests/loops-and-nested-loops/challenges/series-sum-7-1",
      category: "Loop",
      verdict: "todo",
      solveTime: "12m",
      date: "9/25/2026",
      comment: "X - X^3 + X^5 - ... + X^N",
      hint1: "Powers are odd: 1, 3, 5, ..., N.",
      hint2: "Sign alternates: +, -, +, -, ...",
      hint3: "Keep running term: term = term * X * X, sign = -sign.",
      solution: `#include <stdio.h>

int main() {
    long long X, N;
    if (scanf("%lld %lld", &X, &N) == 2) {
        long long sum = 0, term = X, sign = 1;
        for (long long p = 1; p <= N; p += 2) {
            sum += sign * term;
            term *= (X * X);
            sign = -sign;
        }
        printf("%lld\\n", sum);
    }
    return 0;
}`
    },
    {
      id: "L34",
      title: "beecrowd 1080 - Highest and Position",
      judge: "Beecrowd",
      link: "https://judge.beecrowd.com/en/problems/view/1080",
      category: "Loop",
      verdict: "todo",
      solveTime: "10m",
      date: "9/25/2026",
      comment: "Read 100 integers, find max and 1-based index",
      hint1: "Loop 100 times.",
      hint2: "Track `max_val` and `max_pos` (position starts at 1).",
      hint3: "If `val > max_val`, update both.",
      solution: `#include <stdio.h>

int main() {
    int val, max_val = -1, max_pos = -1;
    for (int i = 1; i <= 100; i++) {
        if (scanf("%d", &val) == 1) {
            if (val > max_val) {
                max_val = val;
                max_pos = i;
            }
        }
    }
    printf("%d\\n%d\\n", max_val, max_pos);
    return 0;
}`
    },
    {
      id: "L35",
      title: "beecrowd 1113 - Ascending and Descending",
      judge: "Beecrowd",
      link: "https://judge.beecrowd.com/en/problems/view/1113",
      category: "Loop",
      verdict: "todo",
      solveTime: "8m",
      date: "9/25/2026",
      comment: "While X != Y: print Crescente or Decrescente",
      hint1: "Read X and Y in a loop.",
      hint2: "If X == Y, break.",
      hint3: "If X < Y, print 'Crescente', else 'Decrescente'.",
      solution: `#include <stdio.h>

int main() {
    int X, Y;
    while (scanf("%d %d", &X, &Y) == 2 && X != Y) {
        if (X < Y) printf("Crescente\\n");
        else printf("Decrescente\\n");
    }
    return 0;
}`
    },
    {
      id: "L36",
      title: "HackerRank - Arithmetic Sequence Check",
      judge: "HackerRank",
      link: "https://www.hackerrank.com/contests/loops-and-nested-loops/challenges/sequence-check-2",
      category: "Loop",
      verdict: "todo",
      solveTime: "10m",
      date: "9/25/2026",
      comment: "Check if sequence has constant difference",
      hint1: "Read first two elements to compute common difference `d = a[1] - a[0]`.",
      hint2: "Check if `a[i] - a[i-1] == d` for all remaining elements.",
      hint3: "Print YES or NO.",
      solution: `#include <stdio.h>

int main() {
    int n;
    if (scanf("%d", &n) == 1 && n >= 2) {
        int prev, curr, diff, isAP = 1;
        scanf("%d %d", &prev, &curr);
        diff = curr - prev;
        prev = curr;
        for (int i = 2; i < n; i++) {
            scanf("%d", &curr);
            if (curr - prev != diff) isAP = 0;
            prev = curr;
        }
        if (isAP) printf("YES\\n");
        else printf("NO\\n");
    }
    return 0;
}`
    },
    {
      id: "L37",
      title: "Codeforces 219432/D - Fixed Password",
      judge: "Codeforces",
      link: "https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/D",
      category: "Loop",
      verdict: "todo",
      solveTime: "6m",
      date: "9/25/2026",
      comment: "Password loop: correct password is 1999",
      hint1: "Keep reading integer passwords.",
      hint2: "If password == 1999, print 'Correct' and break.",
      hint3: "Otherwise print 'Wrong' and continue.",
      solution: `#include <stdio.h>

int main() {
    int pass;
    while (scanf("%d", &pass) == 1) {
        if (pass == 1999) {
            printf("Correct\\n");
            break;
        } else {
            printf("Wrong\\n");
        }
    }
    return 0;
}`
    },
    {
      id: "L38",
      title: "beecrowd 1154 - Ages",
      judge: "Beecrowd",
      link: "https://judge.beecrowd.com/en/problems/view/1154",
      category: "Loop",
      verdict: "todo",
      solveTime: "8m",
      date: "9/25/2026",
      comment: "Calculate average of ages until negative age is entered",
      hint1: "Read age in a loop.",
      hint2: "If age < 0, break.",
      hint3: "Sum ages, count individuals, and print `sum / count` with 2 decimal places.",
      solution: `#include <stdio.h>

int main() {
    int age, count = 0;
    double sum = 0.0;
    while (scanf("%d", &age) == 1 && age >= 0) {
        sum += age;
        count++;
    }
    if (count > 0) {
        printf("%.2lf\\n", sum / count);
    }
    return 0;
}`
    },
    {
      id: "L39",
      title: "beecrowd 1115 - Quadrant",
      judge: "Beecrowd",
      link: "https://judge.beecrowd.com/en/problems/view/1115",
      category: "Loop",
      verdict: "todo",
      solveTime: "8m",
      date: "9/25/2026",
      comment: "Determine Cartesian quadrant until X or Y is 0",
      hint1: "Loop while `scanf(\"%d %d\", &x, &y) == 2 && x != 0 && y != 0`.",
      hint2: "x>0, y>0: 'primeiro'. x<0, y>0: 'segundo'. x<0, y<0: 'terceiro'. x>0, y<0: 'quarto'.",
      hint3: "Print Portuguese quadrant names.",
      solution: `#include <stdio.h>

int main() {
    int x, y;
    while (scanf("%d %d", &x, &y) == 2 && x != 0 && y != 0) {
        if (x > 0 && y > 0) printf("primeiro\\n");
        else if (x < 0 && y > 0) printf("segundo\\n");
        else if (x < 0 && y < 0) printf("terceiro\\n");
        else printf("quarto\\n");
    }
    return 0;
}`
    },
    {
      id: "L40",
      title: "beecrowd 1150 - Exceeding Z",
      judge: "Beecrowd",
      link: "https://judge.beecrowd.com/en/problems/view/1150",
      category: "Loop",
      verdict: "todo",
      solveTime: "12m",
      date: "9/25/2026",
      comment: "Read X, then keep reading Z until Z > X. Count integers to exceed Z",
      hint1: "Read X first.",
      hint2: "Keep reading Z in a loop until `Z > X`.",
      hint3: "Start sum = 0, count = 0, curr = X. While `sum <= Z`, `sum += curr; curr++; count++;`.",
      solution: `#include <stdio.h>

int main() {
    int X, Z;
    if (scanf("%d", &X) == 1) {
        while (scanf("%d", &Z) == 1 && Z <= X);
        int sum = 0, count = 0, curr = X;
        while (sum <= Z) {
            sum += curr;
            curr++;
            count++;
        }
        printf("%d\\n", count);
    }
    return 0;
}`
    },
    {
      id: "L41",
      title: "HackerRank - Increasing Sequence Check",
      judge: "HackerRank",
      link: "https://www.hackerrank.com/contests/loops-and-nested-loops/challenges/sequence-check",
      category: "Loop",
      verdict: "todo",
      solveTime: "8m",
      date: "9/25/2026",
      comment: "Check if each element is strictly greater than the previous",
      hint1: "Compare each element with `prev`.",
      hint2: "If `curr <= prev`, flag as not strictly increasing.",
      hint3: "Print YES or NO.",
      solution: `#include <stdio.h>

int main() {
    int n;
    if (scanf("%d", &n) == 1 && n > 0) {
        int prev, curr, isIncreasing = 1;
        scanf("%d", &prev);
        for (int i = 1; i < n; i++) {
            scanf("%d", &curr);
            if (curr <= prev) isIncreasing = 0;
            prev = curr;
        }
        if (isIncreasing) printf("YES\\n");
        else printf("NO\\n");
    }
    return 0;
}`
    },
    {
      id: "L42",
      title: "beecrowd 1095 - Sequence IJ 1",
      judge: "Beecrowd",
      link: "https://judge.beecrowd.com/en/problems/view/1095",
      category: "Loop",
      verdict: "todo",
      solveTime: "6m",
      date: "9/25/2026",
      comment: "I starts at 1 and increases by 3; J starts at 60 and decreases by 5",
      hint1: "Single loop with two loop variables: `for (int i = 1, j = 60; j >= 0; i += 3, j -= 5)`.",
      hint2: "Print `I=%d J=%d\\n`.",
      hint3: "Stops when J becomes negative.",
      solution: `#include <stdio.h>

int main() {
    for (int i = 1, j = 60; j >= 0; i += 3, j -= 5) {
        printf("I=%d J=%d\\n", i, j);
    }
    return 0;
}`
    },
    {
      id: "L43",
      title: "beecrowd 1096 - Sequence IJ 2",
      judge: "Beecrowd",
      link: "https://judge.beecrowd.com/en/problems/view/1096",
      category: "Loop",
      verdict: "todo",
      solveTime: "6m",
      date: "9/25/2026",
      comment: "Nested loop: I = 1, 3, 5, 7, 9; J = 7, 6, 5",
      hint1: "Outer loop: `for (int i = 1; i <= 9; i += 2)`.",
      hint2: "Inner loop: `for (int j = 7; j >= 5; j--)`.",
      hint3: "Print `I=%d J=%d\\n`.",
      solution: `#include <stdio.h>

int main() {
    for (int i = 1; i <= 9; i += 2) {
        for (int j = 7; j >= 5; j--) {
            printf("I=%d J=%d\\n", i, j);
        }
    }
    return 0;
}`
    },
    {
      id: "L44",
      title: "Codeforces 219432/E - Max",
      judge: "Codeforces",
      link: "https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/E",
      category: "Loop",
      verdict: "todo",
      solveTime: "6m",
      date: "9/25/2026",
      comment: "Find maximum among N numbers",
      hint1: "Read N.",
      hint2: "Initialize `max = 0` (all numbers are positive in this problem).",
      hint3: "For each input, update `max`.",
      solution: `#include <stdio.h>

int main() {
    int N;
    if (scanf("%d", &N) == 1) {
        long long val, max_val = 0;
        for (int i = 0; i < N; i++) {
            scanf("%lld", &val);
            if (val > max_val) max_val = val;
        }
        printf("%lld\\n", max_val);
    }
    return 0;
}`
    },
    {
      id: "L45",
      title: "beecrowd 1116 - Dividing X by Y",
      judge: "Beecrowd",
      link: "https://judge.beecrowd.com/en/problems/view/1116",
      category: "Loop",
      verdict: "todo",
      solveTime: "6m",
      date: "9/25/2026",
      comment: "Check division by zero",
      hint1: "Read N test cases.",
      hint2: "If Y == 0, print 'divisao impossivel'.",
      hint3: "Otherwise print `(double)X / Y` with 1 decimal place.",
      solution: `#include <stdio.h>

int main() {
    int N;
    if (scanf("%d", &N) == 1) {
        while (N--) {
            int X, Y;
            scanf("%d %d", &X, &Y);
            if (Y == 0) {
                printf("divisao impossivel\\n");
            } else {
                printf("%.1lf\\n", (double)X / Y);
            }
        }
    }
    return 0;
}`
    },
    {
      id: "L46",
      title: "beecrowd 1132 - Multiples of 13",
      judge: "Beecrowd",
      link: "https://judge.beecrowd.com/en/problems/view/1132",
      category: "Loop",
      verdict: "todo",
      solveTime: "8m",
      date: "9/25/2026",
      comment: "Sum numbers between X and Y NOT divisible by 13",
      hint1: "Ensure X <= Y (swap if X > Y).",
      hint2: "Loop from X to Y.",
      hint3: "If `i % 13 != 0`, add `i` to sum.",
      solution: `#include <stdio.h>

int main() {
    int X, Y;
    if (scanf("%d %d", &X, &Y) == 2) {
        if (X > Y) { int t = X; X = Y; Y = t; }
        long long sum = 0;
        for (int i = X; i <= Y; i++) {
            if (i % 13 != 0) sum += i;
        }
        printf("%lld\\n", sum);
    }
    return 0;
}`
    },
    {
      id: "L47",
      title: "beecrowd 1143 - Squared and Cubic",
      judge: "Beecrowd",
      link: "https://judge.beecrowd.com/en/problems/view/1143",
      category: "Loop",
      verdict: "todo",
      solveTime: "5m",
      date: "9/25/2026",
      comment: "Print i, i^2, i^3 for i = 1 to N",
      hint1: "Read N.",
      hint2: "Loop `i` from 1 to N.",
      hint3: "Print `%d %d %d\\n`, i, i*i, i*i*i.",
      solution: `#include <stdio.h>

int main() {
    int N;
    if (scanf("%d", &N) == 1) {
        for (int i = 1; i <= N; i++) {
            printf("%d %d %d\\n", i, i * i, i * i * i);
        }
    }
    return 0;
}`
    },
    {
      id: "L48",
      title: "beecrowd 1145 - Logical Sequence 2",
      judge: "Beecrowd",
      link: "https://judge.beecrowd.com/en/problems/view/1145",
      category: "Loop",
      verdict: "todo",
      solveTime: "10m",
      date: "9/25/2026",
      comment: "Print 1 to Y with X integers per line, no trailing space",
      hint1: "Loop `i` from 1 to Y.",
      hint2: "If `i % X == 0`, print `%d\\n`.",
      hint3: "Otherwise print `%d ` (space separated).",
      solution: `#include <stdio.h>

int main() {
    int X, Y;
    if (scanf("%d %d", &X, &Y) == 2) {
        for (int i = 1; i <= Y; i++) {
            if (i % X == 0) printf("%d\\n", i);
            else printf("%d ", i);
        }
    }
    return 0;
}`
    },
    {
      id: "L49",
      title: "Codeforces 219432/I - Palindrome",
      judge: "Codeforces",
      link: "https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/I",
      category: "Loop",
      verdict: "todo",
      solveTime: "12m",
      date: "9/25/2026",
      comment: "Reverse digits and check palindrome",
      hint1: "Reverse N into another variable: `rev = rev * 10 + N % 10; N /= 10;`.",
      hint2: "Print `rev` (without leading zeros, which standard %d automatically does).",
      hint3: "If `rev == original`, print YES, else NO.",
      solution: `#include <stdio.h>

int main() {
    long long N;
    if (scanf("%lld", &N) == 1) {
        long long orig = N, rev = 0;
        while (N > 0) {
            rev = rev * 10 + (N % 10);
            N /= 10;
        }
        printf("%lld\\n", rev);
        if (rev == orig) printf("YES\\n");
        else printf("NO\\n");
    }
    return 0;
}`
    },
    {
      id: "L50",
      title: "Codeforces 219432/Y - Easy Fibonacci",
      judge: "Codeforces",
      link: "https://codeforces.com/group/MWSDmqGsZm/contest/219432/problem/Y",
      category: "Loop",
      verdict: "todo",
      solveTime: "10m",
      date: "9/25/2026",
      comment: "Print first N terms of Fibonacci sequence: 0, 1, 1, 2, 3...",
      hint1: "First two terms are 0 and 1.",
      hint2: "Next terms are `c = a + b; a = b; b = c;`.",
      hint3: "Print terms separated by spaces.",
      solution: `#include <stdio.h>

int main() {
    int N;
    if (scanf("%d", &N) == 1) {
        long long a = 0, b = 1;
        for (int i = 0; i < N; i++) {
            if (i == 0) printf("0");
            else if (i == 1) printf(" 1");
            else {
                long long c = a + b;
                printf(" %lld", c);
                a = b;
                b = c;
            }
        }
        printf("\\n");
    }
    return 0;
}`
    },

    // --- SECTION 4: SWITCH CASE (Switch 1 & Switch 2) ---
    {
      id: "Switch1",
      title: "beecrowd 1038 - Snack (Switch-Case Implementation)",
      judge: "Beecrowd",
      link: "https://judge.beecrowd.com/en/problems/view/1038",
      category: "Switch",
      verdict: "todo",
      solveTime: "10m",
      date: "9/26/2026",
      comment: "Implementation of Snack problem using switch-case syntax",
      hint1: "Use `switch (code) { case 1: ... break; }` structure.",
      hint2: "Map each item code to its corresponding price.",
      hint3: "Include default case for robustness.",
      solution: `#include <stdio.h>

int main() {
    int code, qty;
    double price = 0.0;
    if (scanf("%d %d", &code, &qty) == 2) {
        switch (code) {
            case 1: price = 4.00; break;
            case 2: price = 4.50; break;
            case 3: price = 5.00; break;
            case 4: price = 2.00; break;
            case 5: price = 1.50; break;
            default: price = 0.00; break;
        }
        printf("Total: R$ %.2lf\\n", price * qty);
    }
    return 0;
}`
    },
    {
      id: "Switch2",
      title: "beecrowd 1052 - Month (Switch-Case)",
      judge: "Beecrowd",
      link: "https://judge.beecrowd.com/en/problems/view/1052",
      category: "Switch",
      verdict: "todo",
      solveTime: "8m",
      date: "9/26/2026",
      comment: "Read 1-12 and print month name in English",
      hint1: "Read integer month from 1 to 12.",
      hint2: "Use `switch(month)` with 12 cases: January, February, ..., December.",
      hint3: "Capitalize first letter.",
      solution: `#include <stdio.h>

int main() {
    int month;
    if (scanf("%d", &month) == 1) {
        switch (month) {
            case 1: printf("January\\n"); break;
            case 2: printf("February\\n"); break;
            case 3: printf("March\\n"); break;
            case 4: printf("April\\n"); break;
            case 5: printf("May\\n"); break;
            case 6: printf("June\\n"); break;
            case 7: printf("July\\n"); break;
            case 8: printf("August\\n"); break;
            case 9: printf("September\\n"); break;
            case 10: printf("October\\n"); break;
            case 11: printf("November\\n"); break;
            case 12: printf("December\\n"); break;
            default: break;
        }
    }
    return 0;
}`
    },

    // --- SECTION 5: ANIMATION (Animation 1) ---
    {
      id: "Animation1",
      title: "Console Name Animation in C",
      judge: "Custom",
      link: "#",
      category: "Animation",
      verdict: "todo",
      solveTime: "25m",
      date: "9/26/2026",
      comment: "Bouncing or sliding ASCII banner using ANSI escape codes or Sleep",
      hint1: "To create animation, draw a frame, delay for milliseconds, then clear console screen.",
      hint2: "In Windows C, use `#include <windows.h>` and `Sleep(ms)` or cross-platform ANSI escape sequences.",
      hint3: "Clear screen using `system(\"cls\")` or `printf(\"\\033[H\\033[J\");`.",
      solution: `#include <stdio.h>
#include <stdlib.h>

#ifdef _WIN32
#include <windows.h>
void sleep_ms(int ms) { Sleep(ms); }
void clear_screen() { system("cls"); }
#else
#include <unistd.h>
void sleep_ms(int ms) { usleep(ms * 1000); }
void clear_screen() { printf("\\033[H\\033[J"); }
#endif

int main() {
    const char *name = "★ IIUC CSE - WELCOME TO PROBLEM SOLVING ARENA ★";
    int width = 50;
    
    for (int frame = 0; frame < 60; frame++) {
        clear_screen();
        // Print shifting padding
        int spaces = frame % 25;
        for (int i = 0; i < spaces; i++) printf(" ");
        printf("%s\\n", name);
        
        // Print decorative bouncing stars below
        for (int i = 0; i < (25 - spaces); i++) printf(" ");
        printf(">>>>>>>>>>>>>>>>>>>>>>>>>>>>\\n");
        
        sleep_ms(80);
    }
    printf("\\nAnimation finished! Happy Coding!\\n");
    return 0;
}`
    }
  ]
};
