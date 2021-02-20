import Select from 'react-select'
import React from "react";
import PropTypes from "prop-types";

const options = [
    { value: 'created', label: 'created' },
    { value: 'updated', label: 'updated' },
    { value: 'stars', label: 'stars' },
    { value: 'forks', label: 'forks' },
    { value: 'help-wanted-issues', label: 'help-wanted-issues' }
]

const SelectSort = ({changeOption}) => (
    <Select  placeholder="sort"
             options={options}
             onChange={(obj) => changeOption(obj.value)} />
)

SelectSort.propTypes = {
    changeOption: PropTypes.func,
}

export default SelectSort