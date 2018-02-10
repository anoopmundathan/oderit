const functionUrl = 'https://us-central1-oderit-34151.cloudfunctions.net/orderConfirmation'

export const letStoreOwnerKnowAboutOrder = async data => {
  try {
    const response = await fetch(functionUrl, {
      method: 'POST',
      headers: new Headers({ 
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(data)
    })
    return await response.json()
  } catch(err) {
    return null
  }
}
