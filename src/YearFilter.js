import { Component } from 'react'
class YearFilter extends Component {
    state = {
        year: 'All'
    }

    filteredYears = () => {
        return (
            this.props.films.filter(film => film.released_date.includes(this.state.released_date))
        )
    }

    handleChange = (e) => {
        this.setState({Year: e.target.value })
    }
    render() {
        return (
            <div>
                  <label for="search-year"> Choose a Year: </label>
                <select name="years" id="year" onChange={this.handleChange} value={this.state.genre}>
                    <option value="All">All</option>
                    <option value="2021">2021</option>
                    <option value="2016">2016</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                    

                </select>
            </div>

        )
    }






}
export default YearFilter;