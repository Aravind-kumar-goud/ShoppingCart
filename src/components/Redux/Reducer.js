import { ADD_CART, ADD_ITEM, DEL_ITEM, LOGIN_DATA, USER_DATA } from "./Type";

const initial = {
    userData:[],
    cart:[],
    login:false
}

const Reducer = (state = initial, action) => {
    switch (action.type) {
        case USER_DATA: 
        return {
            ...state,
            userData:[...state.userData,action.payload]
            
        }

        case LOGIN_DATA:
            return{
                ...state,
                login:action.payload
            }
        

        case ADD_CART:
            const item= action.payload;
          const exist2=state.cart.filter((x)=>x.id===item.id);
          console.log(exist2);
          if(exist2.length>0){ 
              return{ ...state,
                cart:state.cart
              }
            
          }else{
            return{...state,
                cart:[...state.cart,{...item,qty:1}]}

          }



        case ADD_ITEM:
          const pro= action.payload;
          const exist=state.cart.find((x)=>x.id===pro.id);
          console.log(exist);

            if(exist){
                 return {...state,
                    cart:state.cart.map((x)=>x.id===pro.id?{...x,qty:x.qty+1}:x)}   
              
            }else{
            
            const pro= action.payload;
                return{...state,
                    cart:[...state.cart,{...pro,qty:1}]}
            }

            case DEL_ITEM:
                const prod= action.payload;
                const exist1=state.cart.find((x)=>x.id===prod.id);
                if(exist1.qty===1){
                    return {...state, 
                        cart:state.cart.filter((e)=>{
                            if(e.id!==exist1.id){
                                return e
                            }
                        })}
                }else{
                    return {
                        ...state,
                        cart:state.cart.map((x)=>x.id===prod.id?{...x, qty:x.qty-1}:x)}   

                }
        
            
        default: 
        return state;
    }
}
export default Reducer