import React, { useEffect, useState } from 'react'
import PropTypes from "prop-types";// for type-checking props
import "react-input-range/lib/css/index.css";
// (inBuilt style)Importing CSS file for input range styling .
import InputRange from 'react-input-range';

import "../../CSS/FilterModal.css";


export const FilterModal = ({ selectedFilters, onFilterChange, setFilter }) => {

    const [priceRange, setPriceRange] = useState({
        min: selectedFilters.priceRange?.min || 600,//?. - Optional Chaining Operator
        max: selectedFilters.priceRange?.max || 30000,
    });
    const [propertyType, setPropertyType] = useState(
        selectedFilters.propertyType || " "       // Default it is empty or selected property type from props
    );
    const [roomType, setRoomType] = useState(selectedFilters.roomType || "");

    const [amenities, setAmenities] = useState(selectedFilters.amenities || "");

    // useEffect hook to update states when selectedFiltrs prop changes .
    useEffect(() => {
        setPriceRange({
            min: selectedFilters.priceRange?.min || 600,
            max: selectedFilters.priceRange?.max || 30000,

        });
        setPropertyType(selectedFilters.propertyType || " ");
        setRoomType(selectedFilters.roomType || "");
        setAmenities(selectedFilters.amenities || "");
    }, [selectedFilters])

    //Function to handle for changes in price change .

    const handlePriceRange = (value) => {
        setPriceRange(value);

    }
    //Function to handle min value .

    const handleMinInputRange = (e) =>
     {
        const minvalue = parseInt(e.target.value, 10); //10 means its base value which is decimal.
        setPriceRange((prev) => ({ ...prev, min: minvalue }))


    }

    //Function to handle max value .

    const handleMaxInputRange = (e) => {
        const maxvalue = parseInt(e.target.value, 10);
        setPriceRange((prev) => ({ ...prev, max: maxvalue })) //prev contains max value also since it's an object.


    }

    // Function to handle applying filters 
    const handleFilterChange = () => {
        onFilterChange("minPrice", priceRange.min);
        onFilterChange("maxPrice", priceRange.max);
        onFilterChange("propertyType", propertyType);
        onFilterChange("roomType", roomType);
        onFilterChange("amenities", amenities);
  
        setFilter(false);
      
    }

    //Options for property types.
    const propertyTypeOptions = [
        {
            value: "House",
            label: "House",
            icon: "house"
        },
        {
            value: "Flat",
            label: "Flat",
            icon: "apartment"
        },
        {
            value: "Guest House",
            label: "Guest House",
            icon: "hotel"
        },
        {
            value: "Hotel",
            label: "Hotel",
            icon: "meeting_room"
        },

    ]

    //Options For rendering room types.

    const RoomTypeOptions = [
        {
            value: "Entire Room",
            label: "Entire Room",
            icon: 'hotel'

        },
        {
            value: "Room",
            label: "Room",
            icon: 'meeting_room'

        },
        {
            value: "AnyType",
            label: "AnyType",
            icon: 'apartment'

        }
    ]

    //Options for rendering amenities
    const amenitiesOptions = [
        {
            value: "wifi",
            label: "wifi",
            icon: "wifi"
        },
        {
            value: "Kitchen",
            label: "Kitchen",
            icon: "kitchen"
        },
        {
            value: "Ac",
            label: "Ac",
            icon: "ac_unit"
        },
        {
            value: "Washing Machine",
            label: "Washing Machine",
            icon: "local_laundry_service"
        },
        {
            value: "Tv",
            label: "Tv",
            icon: "tv"
        },
        {
            value: "Pool",
            label: "Pool",
            icon: "pool"
        },
        {
            value: "Free Parking",
            label: "Free Parking",
            icon: "local_parking"
        },
    ]

    //Function to handle Clear Filters.

    const handleClearFilters = () => {
        setPriceRange({ min: 600, max: 30000 });
        setPropertyType("");
        setRoomType("");
        setAmenities([]);
    }

    //Function to handle change in amenities

    const handleAmenitiesChange = (selectedAmenity) => {
        setAmenities((prevAmenities) =>
            prevAmenities.includes(selectedAmenity) ?
                prevAmenities.filter((item) => item !== selectedAmenity) :
                [...prevAmenities, selectedAmenity]);
              
    }

    //handle changes in propertyTypes
    const handlePropertyTypeChange = (selectedType) => {
        setPropertyType((prevType) =>
            prevType === selectedType ? "" : selectedType
        )

    }

    //handle changes in RoomType
    const handleRoomTypeChange = (selectedType) => {
        setRoomType((prevType) =>
            prevType === selectedType ? "" : selectedType
        )

    }

    return (
        <div className='modal-backdrop'>
            <div className="modal-content">
                <h4>Filters</h4>
                <button className='close-button' onClick={() => setFilter(false)}>
                    <span>&times;</span>
                </button>

                {/* Filter Section */}
                <div className="modal-filters-container">
                    <div className="filter-section">
                        <label >Price Range:</label>
                        <InputRange minValue={600}
                            maxValue={30000}

                            value={priceRange}

                            onChange={handlePriceRange}

                        />
                        <div className="range-inputs">
                            <input
                                type="number"
                                value={priceRange.min}
                                onChange={handleMinInputRange} />
                            <span>-</span>
                            <input
                                type="number"
                                value={priceRange.max}
                                onChange={handleMaxInputRange} />
                        </div>

                    </div>

                    {/* Property Type Filter */}
                    <div className="filter-section">
                        <label >Property Type : </label>
                        <div className="icon-box">
                            {propertyTypeOptions.map((option) => (
                                <div
                                    key={option.value}
                                    className={`selectable-box ${propertyType === option.value ? "selected" : ""}`}
                                    onClick={() => handlePropertyTypeChange(option.value)}>
                                    <span className='material-icons'>{option.icon}</span>
                                    <span>{option.label}</span>
                                   
                                </div>
                            ))}
                  


                        </div>
                    </div>

                    {/* Room Type Filter */}
                    <div className="filter-section">
                        <label >Room Type : </label>
                        <div className="icon-box">
                            {RoomTypeOptions.map((option) => (
                                <div
                                    key={option.value}
                                    className={`selectable-box ${roomType === option.value ? "selected" : ""}`}
                                    onClick={() => handleRoomTypeChange(option.value)}>
                                    <span className='material-icons'>{option.icon}</span>
                                    <span>{option.label}</span>
                                </div>
                            ))}

                        </div>
                    </div>
                    {/* Amenities Type Filter */}
                    <div className="filter-section">
                        <label >Amenities</label>
                        <div className="amenities-checkboxes">
                            {amenitiesOptions.map((option) => (
                                <div className='amenity-checkbox' key={option.value}>

                                    
                                    <input
                                        type="checkbox"
                                        value={option.value}
                                        onChange={() => handleAmenitiesChange(option.value)}
                                        checked={amenities.includes(option.value)} />

                                    <span className='material-icons amenitieslabel'>{option.icon}
                                    </span>
                                    <span>{option.label}</span>

                                </div>
                            ))}

                        </div>
                    </div>

                    {/* Filter Action Buttons */}

                    <div className="filter-buttons">
                        <button
                            className='clear-button'
                            onClick={handleClearFilters}>
                            Clear
                        </button>
                        <button
                            
                            onClick={handleFilterChange}
                        >
                            Apply Filters
                        </button>
                    </div>


                </div>

            </div>

        </div>
    )
}


FilterModal.propTypes= {
    selectedFilters:PropTypes.object.isRequired,
    onFilterChange:PropTypes.func.isRequired,
    setFilter:PropTypes.bool.isRequired};
