import axios from 'axios'

const state = {
  cart: []
}

const getters = {
  CART (state) {
    return state.cart
  }
}

const mutations = {
  ADD_TO_CART: (state, data) => {
    if (state.cart.length) {
      let isExists = false
      state.cart.map(function (item) {
        if (item.id === data.id) {
          isExists = true
          item.quantity++
        }
      })
      if (!isExists) {
        state.cart.push(data)
      }
    } else {
      state.cart.push(data)
    }
  },
  DELETE_FROM_CART: (state, id) => {
    let index = state.cart.findIndex(x => x.id === id)
    state.cart.splice(index, 1)
  },
  INCREMENT: (state, id) => {
    let index = state.cart.findIndex(x => x.id === id)
    state.cart[index].quantity++
  },
  DECREMENT: (state, id) => {
    let index = state.cart.findIndex(x => x.id === id)
    state.cart[index].quantity--
    if (state.cart[index].quantity === 0) {
      state.cart.splice(index, 1)
    }
  }
}

const actions = {
  ADD_ITEM_TO_CART ({commit}, data) {
    // eslint-disable-next-line no-undef
    return toast.fire({
      icon: 'success',
      position: 'top-end',
      title: 'Добавлено',
      timer: 500
    }).then(() => {
      commit('ADD_TO_CART', data)
    })
  },
  DELETE_ITEM_FROM_CART ({commit}, id) {
    commit('DELETE_FROM_CART', id)
  },
  INCREMENT ({commit}, id) {
    commit('INCREMENT', id)
  },
  DECREMENT ({commit}, id) {
    commit('DECREMENT', id)
  },
  ORDER ({commit}, data) {
    return axios.post(`api/order`, data)
      .then((response) => {
        // eslint-disable-next-line no-undef
        toast.fire({
          icon: 'success',
          title: 'Заказ выполнен успешно'
        })
      }).catch(error => {
        console.log(error)
      })
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
