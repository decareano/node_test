function UserException(message) {
   this.message = message;
   this.name = 'UserException';
}
function getMonthName(mo) {
   mo = mo - 1; // Adjust month number for array index (1 = Jan, 12 = Dec)
   var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul',
      'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
   if (months[mo] !== undefined) {
      return months[mo];
   } else {
      throw new UserException('InvalidMonthNo');
   }
}

try {
   // statements to try
   var myMonth = 4; // 15 is out of bound to raise the exception
   var monthName = getMonthName(myMonth);
   console.log(monthName);
} catch (e) {
   monthName = 'unknown';
   console.log(e.message, e.name); // pass exception object to err handler
}