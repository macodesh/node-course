import { mapObjectToArray, getNewUser } from '../index'

// Teste para a função getNewUser
describe('getNewUser', () => {
  // Teste: usuário existe
  it('user does exist', async () => {
    // Chama a função getNewUser com o ID 1
    const user = await getNewUser(1)

    // Verifica se a função retorna um usuário não nulo
    expect(user).toBeTruthy()

    // Verifica se o usuário retornado possui a propriedade 'verified' com valor false
    expect(user.verified).toBe(false)
  })

  // Teste: usuário não existe
  it('user does not exist', async () => {
    // Define a quantidade de verificações esperadas no teste (1 expectativa)
    expect.assertions(1)

    try {
      // Chama a função getNewUser com um ID que não existe (3)
      await getNewUser(3)
    } catch (e) {
      // Verifica se a função retorna um erro com a mensagem correta
      expect(e.message).toBe('User does not exist')
    }
  })
})

// Teste para a função mapObjectToArray
describe('mapObjectToArray', () => {
  // Teste: a função de callback é chamada para cada valor do objeto
  it('callback gets called for each value', () => {
    // Cria uma função mock para usar como callback
    const mock = jest.fn()

    // Chama a função mapObjectToArray com um objeto e a função mock como callback
    mapObjectToArray({ a: 1, b: 1, c: 1 }, mock)

    // Verifica se a função mock foi chamada três vezes (uma vez para cada valor do objeto)
    expect(mock.mock.calls.length).toBe(3)
  })

  // Teste: a função de callback recebe os argumentos corretos
  it('callback gets the right args', () => {
    // Cria uma função mock para usar como callback
    const mockCb = jest.fn()

    // Cria um objeto
    const o = { a: 1, b: 1, c: 1 }

    // Chama a função mapObjectToArray com o objeto e a função mock como callback
    mapObjectToArray(o, mockCb)

    // Obtém os argumentos da primeira chamada da função mock
    const firstCall = mockCb.mock.calls[0]

    // Verifica se os argumentos são os esperados (chave, valor e o próprio objeto)
    expect(firstCall[0]).toBe('a')
    expect(firstCall[1]).toBe(1)
    expect(firstCall[2]).toBe(o)
  })
})
