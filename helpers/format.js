// helpers/format.js

module.exports = {
    formatCurrency(amount) {
      return `$${amount.toFixed(2)}`;
    },
    
    formatPercentage(percentage) {
      return `${(percentage * 100).toFixed(2)}%`;
    },
    
    // ...
  };
  