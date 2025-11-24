import React from "react";

// --- MOCK DATA ---
const MOCK_RESULTS = {
  questions: [
    { id: 1, type: 'theory', q: 'Explain the primary difference between Microeconomics and Macroeconomics based on the lecture notes.', difficulty: 'Medium' },
    { id: 2, type: 'mcq', q: 'Which market structure is characterized by a single seller?', options: ['Perfect Competition', 'Monopoly', 'Oligopoly', 'Monopolistic'], correct: 'Monopoly' },
    { id: 3, type: 'essay', q: 'Discuss the impact of inflation on consumer purchasing power, referencing the "Basket of Goods" concept.', difficulty: 'Hard' }
  ],
  flashcards: [
    { id: 1, front: 'Law of Demand', back: 'As price increases, quantity demanded decreases (ceteris paribus).' },
    { id: 2, front: 'Opportunity Cost', back: 'The value of the next best alternative foregone.' },
    { id: 3, front: 'Elasticity', back: 'A measure of a variable\'s sensitivity to a change in another variable.' }
  ],
  summary: {
    title: "Economics 101: Market Forces",
    keyPoints: [
      "Supply and Demand determine market equilibrium.",
      "Price ceilings cause shortages; price floors cause surpluses.",
      "Elasticity determines how tax burdens are shared between buyers and sellers."
    ],
    lecturerFocus: "Professor tends to focus heavily on graph interpretations for the final section."
  }
};

export default MOCK_RESULTS;