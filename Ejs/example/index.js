const ejs = require('index')
const people = ['Trump', 'O.Sulivan', 'Ding']

const html = ejs.render(
`
<% people.forEach(item => { %>
  <li><%=item%></li>
<% }) %>
`, { people: people})

console.log(html)
