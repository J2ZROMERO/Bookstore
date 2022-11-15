const STATUS_CHECKED = "STATUS_CHECKED";


const setConfig = (state = [],action = {})=>{
    switch (action.type){
        case STATUS_CHECKED:
            return "Under construction"
        

        default: state;
    }

}

const checkedStatus = () =>{
    return {type: STATUS_CHECKED}
}

export default {setConfig,checkedStatus};