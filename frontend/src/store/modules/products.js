export const state = {
  allProducts: []
};

export const mutations = {
  insertAllProducts(state, payload){
    state.allProducts = payload
  }
};
export const actions = {
  async getAllProducts({commit}) {
    try{
      let response = await fetch(
        "http://localhost:5000/api/product/"
        ).then(response => response.json())
        commit("insertAllProducts", response)
    }catch(e){
      console.log("Error: ",e)
    }
  }
  
};
export const getters = {
  oneProduct(state){
    return [...state.allProducts][0]
  },
  coldProducts(state){
    let out = []
    state.allProducts.forEach((element)=>{
      element.category == "Холодные закуски  " ? out.push(element) : ''
    })
    return out
  },
  hotProducts(state){
    let out = []
    state.allProducts.forEach((element)=>{
      element.category == 'Горячие закуски' ? out.push(element) : ''
    })
    return out
  },
  meatProducts(state){
    let out = []
    state.allProducts.forEach((element)=>{
      element.category == 'Мясные блюда' ? out.push(element) : ''
    })
    return out
  },
  drinkProducts(state){
    let out = []
    state.allProducts.forEach((element)=>{
      element.category == 'Напитки' ? out.push(element) : ''
    })
    return out
  }
};
