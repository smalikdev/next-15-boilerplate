import { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEarthAmericas } from "@fortawesome/free-solid-svg-icons"

const LanguageSwitcher = () => {
  const [Language, setLanguage] = useState("en")

  const toggleLanguage = () => {
    //setLanguage((prevLanguage) => (prevLanguage === "en" ? "ar" : "en"));
  }

  // useEffect(() => {
  //     document.documentElement.lang = Language;
  //     // You can also set other language-specific settings here, such as direction
  //     document.documentElement.dir = Language === "ar" ? "rtl" : "ltr";
  // }, [Language]);

  return (
    <div>
      <button onClick={toggleLanguage}>
        <div className="block rounded-full border-lightshadow bg-lightsecondary p-2 text-lightHeaderIcons shadow dark:bg-darksecondary dark:text-darkHeaderIcons">
          <FontAwesomeIcon icon={faEarthAmericas} size="xl" />
        </div>
      </button>
    </div>
  )
}

export default LanguageSwitcher
