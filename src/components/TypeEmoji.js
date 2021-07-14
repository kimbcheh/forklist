function TypeEmoji({ type }) {
 switch (type) {
  case 'Bar':
   return (
    <span role='img' aria-label='bar'>
     🍸
    </span>
   )
  case 'Cafe':
   return (
    <span role='img' aria-label='cafe'>
     ☕
    </span>
   )
  case 'Dessert':
   return (
    <span role='img' aria-label='dessert'>
     🍩
    </span>
   )
  default:
   return (
    <span role='img' aria-label='restaurant'>
     🍽️
    </span>
   )
 }
}

export default TypeEmoji
