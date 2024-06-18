/* eslint-disable jsx-a11y/anchor-is-valid */
import 'materialize-css/dist/css/materialize.min.css'

export default function BarraNavegacao(props) {

    const gerarListaBotoes = () => {
        if (props.botoes.length <= 0) {
            return <></>
        } else {
            let lista = props.botoes.map(valor =>
                <li key={valor.none}><a href={valor.rota} >{valor.nome}</a></li>
            )
            return lista
        }
    }

    return (
        <>
            <nav className="#d84315 deep-orange darken-3">
                <div className="nav-wrapper">
                    <a className="brand-logo">World Beauty</a>
                    <a data-target="mobile-menu" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down">
                        {gerarListaBotoes()}
                    </ul>
                </div>
            </nav>
            <ul className="sidenav" id="mobile-menu">
                {gerarListaBotoes()}
            </ul>
        </>
    )
}