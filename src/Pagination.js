function Pagination(props) {

    const getPaginas = () => {
        const resultado = [];
        for (var i = 0; i < props.total; i++) {
            if (i + 1 === props.pagina) {
                resultado.push(<a onClick={props.onChange} className="active" href="#">{i + 1}</a>)
            }
            else {
                resultado.push(<a onClick={props.onChange} href="#">{i + 1}</a>)
            }
        }
        return resultado;
    }

    return (
        <div className="topbar-filter">
            <label>Movies per page:</label>
            <select>
                <option value="range">5 Movies</option>
                <option value="saab">10 Movies</option>
            </select>

            <div className="pagination2">
                <span>Page {props.pagina} of {props.total}:</span>
                {getPaginas()}
                <a href="#"><i className="ion-arrow-right-b"></i></a>
            </div>
        </div>
    );
}

export default Pagination; 