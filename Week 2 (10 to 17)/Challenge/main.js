// ===========================================
// == Variables And Concatenation Challenge ==
// ===========================================

// [1] Create 3 Variables [Title, Desctiption, Date]
// -- All In One Statement
// -- Variable Name Must Be Two Words
// -- Title Content Is "Elzero"
// -- Description Content Is "Elzero Web School"
// -- Date Content Is "25/10"
// [2] Create Variable Contains Div And This Div Contains
// -- H3 For Title
// -- P For Paragraph
// -- Span For Time
// [3] Add This Card To Page 4 Times
// [4] Use Template Literals For Concatenate
// Extra
// - Use ES6 Repeat

const theTitle = "Elzero";
const theDesc = "Elzero Web School";
const theDate = "25/10";
const markUp = `
    <div>
        <h3>Hello ${theTitle}</h3>
        <p>${theDesc}</p>
        <span>${theDate}</span>
    </div>
`;

document.writeln(markUp.repeat(4));