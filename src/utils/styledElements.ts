import styled from 'styled-components'

const StyledList = styled.li`
    list-style: none;
    overflow: hidden;
    width: 100%;
    margin-bottom: 10px;
    display: flex;
    // justify-content: center;
    // align-content: center
`

const StyledItem = styled.label`
    float: left;
    cursor: pointer
`

const StyledRemoveButton = styled.button`
    float: right;
    background: red;
    color: white;
    border-radius: 3px;
    border: 2px solid red;
    outline: none;
    cursor: pointer
`
const StyledEditButton = styled.button`
    float: right;
    background: #0baaea;
    color: white;
    border-radius: 3px;
    border: 2px solid #0baaea;
    outline: none;
    cursor: pointer;
    margin-right: 5px
`

const Buttons = styled.div`
    display: flex;
    margin-left: 20px
`

const FormInput = styled.input`
    width: 170px;
    outlne: none;
    font-size: 15px;
    padding: 3px 4px 2px 3px;

`

const FormInputMain = styled.input`
    width: 200px;
    outlne: none;
    font-size: 15px;
    padding: 3px 4px 2px 3px;

`

const FormStyled = styled.form`
 
`

const StyledAddButton = styled.button`
    border-radius: 3px;
    background-color: green;
    color: white;
    padding: 3px 4px 2px 3px;
    margin-left: 5px;
    font-size: 15px;
    border: 2px solid green;
    outline: none;
    cursor: pointer;
    // float: right
`
const Task = styled.ul`
    padding: 5px;
    border-bottom: solid 2px #e6e6e6;
    width: 20vw;
`
const SortButton = styled.button`
    border-radius: 3px;
    background-color: white;
    color: black;
    padding: 3px 4px 2px 3px;
    // border: 2px solid white;
    margin-left: 5px;
    font-size: 15px;
    outline: none;
    cursor: pointer;
    // float: right
`


export {
    StyledList,
    StyledRemoveButton,
    StyledEditButton,
    StyledItem,
    FormInput,
    Buttons,
    FormInputMain,
    StyledAddButton,
    FormStyled,
    Task,
    SortButton
}