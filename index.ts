// Função que cria um atraso assíncrono em milissegundos
const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

// Array de usuários (exemplo)
const users = [{ email: 'goku@test.com', id: 1, name: 'Goku', verified: false }]

// Função assíncrona que busca um novo usuário pelo ID
const getNewUser = async id => {
  await delay(100) // Espera 100ms antes de continuar (simulando um atraso)
  const user = users.find(u => u.id === id)

  if (!user) throw new Error('User does not exist')
  return user
}

// Função que mapeia um objeto em um array com base em uma função de callback
const mapObjectToArray = (o: any, cb: any) => {
  const results: unknown[] = []

  for (const [k, v] of Object.entries(o)) {
    results.push(cb(k, v, o))
  }

  return results
}

// Exporta as funções para que possam ser usadas em outros módulos
export { getNewUser, mapObjectToArray }
