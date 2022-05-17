$(() => {
//   $('#selected-plays > li')
//     .addClass('horizontal');
//  $('#selected-plays li:not(.horizontal)')
// .addClass('sub-level');
// $('#selected-plays li:not(.sub-level)')
// .addClass('big-letter');

//   $('a[href^="mailto:"]')
//   .addClass('mailto');
//   $('a[href$=".pdf"]')
//   .addClass('pdflink');
//   $('a[href^="http"][href*="henry"]')
// .addClass('henrylink');

//   $('tr:even').addClass('alt');


//Add a class of special to all of the <li> elements at the second level of the nested list.
$('ul ul li').addClass('special');


//Add a class of year to all the table cells in the third column of a table.
$('td:nth-child(3)').addClass('year');


//Add the class special to the first table row that has the word Tragedy in it.
$('tr:contains(Tragedy)').eq(0)
.addClass('special');

//Here's a challenge for you. Select all the list items (<li>s) containing a link (<a>).
//Add the class afterlink to the sibling list items that follow the ones selected.
$(' li:has(a)').nextAll().addClass('afterlink');

//Here's another challenge for you. Add the class tragedy to the closest ancestor
//<ul> of any .pdf link.
$("a[href$='.pdf']").closest("ul").addClass("tragedy");
});
