import Navbar from "../../components/Navbar";
import "./Metal_Heavy.css"


const Metal_Heavy = () => {
    return (
      <>
      <Navbar />
      
      <main className="mainhm">
      <h1 className="hmCim">A heavy metal</h1>
        <div className="hmLeiras">
            <p>Leírás</p>
            <p>A heavy metal (vagy egyszerűen csak metal, metálzene) rockzenei műfaj, amely 1968 és 1974 között jött létre.A heavy metalt életre hívó, blues-rock- és pszichedelikusrock-gyökerekkel rendelkező együttesek gitár- és dobközpontú, vastag, kemény hangzást alakítottak ki, melyet erős torzítás és gyors gitárszólók jellemeznek.A heavy metal a könnyűzenei műfajok egyik legextrémebb formája.</p>
        </div>

        <h1 className="hmCim">Képviselőik</h1>
        <div className="hmBaloszlop">
            <div>
                <p></p>
                <p>Black Sabbath</p>
                <p></p>
                <p>1968</p>
            </div>
            <div>
                <p></p>
                <p>Judas Priest</p>
                <p></p>
                <p>1969</p>
            </div>
            <div>
                <p></p>
                <p>Motörhead</p>
                <p></p>
                <p>1975</p>
            </div>
            <div>
                <p></p>
                <p>Iron Maiden</p>
                <p></p>
                <p>1975</p>
            </div>
        </div>
        <div className="hmJobboszlop">

        </div>
      </main>
      </>
    )
}

export default Metal_Heavy