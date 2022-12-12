import React from 'react'

function Header({totalIncome,totalExpenses}) {
  return (
    <header>
    <h1>Income Tracker</h1>
    <div className="total-income">{totalIncome}Rs</div>
    
  </header>
  )
}

export default Header