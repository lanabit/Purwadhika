'use client'
export const createAuthSlice = (set) => ({
  users:null,
  createUsers: (payload) => {
    set(({users: payload}))
  }
})

export const getProductList = (set) => ({
  products:null,
  getProducts: (payload) => {
    set(({products: payload}))
  }
})
