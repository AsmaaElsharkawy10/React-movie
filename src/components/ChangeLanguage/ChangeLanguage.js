import React from 'react'
import { useSelector , useDispatch } from 'react-redux';
import { changeLanguage } from '../../store/actions/language';
function ChangeLanguage() {
    const language = useSelector((state)=>state.language.lang)
    const dispatch = useDispatch()
    const changeLanguageFun = ()=>{
        dispatch(changeLanguage(language == 'ar' ? 'en' : 'ar'))
    }
  return (
    <div>
        <p>Current language : {language}</p>
        <button className='btn btn-primary' onClick={()=>changeLanguageFun()}>change Language</button>
    </div>
  )
}

export default ChangeLanguage