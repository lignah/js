(true || 1 || -1 || " " || [] || {} || function(){}) ? console.log("t") : console.log("f");

(false || 0 || -0 || "" || null || undefined || void 1 || NaN) ? console.log("t") : console.log("f");