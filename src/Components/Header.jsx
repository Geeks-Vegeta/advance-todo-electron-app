import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBTooltip,
  MDBContainer,
  MDBIcon,
  MDBBtn,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
import { FcTodoList } from "react-icons/fc";
import { FiPlus } from "react-icons/fi";
import { RiTodoFill } from "react-icons/ri";

import "./header.css";
import { Link, useLocation } from 'react-router-dom';


export default function Header() {
    let location = useLocation();
  const [showBasic, setShowBasic] = useState(true);


  return (
    <>
      <MDBNavbar expand='lg' light bgColor='white' fixed>
        <MDBContainer fluid>
          <MDBNavbarToggler
            aria-controls='navbarExample01'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <MDBIcon fas icon='bars' />
          </MDBNavbarToggler>
          <MDBCollapse show={showBasic}>
            <MDBNavbarNav className='mb-2 mb-lg-0'>
              <MDBNavbarItem active>
                <MDBNavbarLink aria-current='page'>
                <MDBDropdown>
                <MDBDropdownToggle color='light'>
                    Advance Todo List 
                <FcTodoList size={20}/>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                    <Link to="/">

                       <MDBDropdownItem link>
                            <RiTodoFill/> Default
                       </MDBDropdownItem>
                    </Link>

                    <Link to="/finished">
                       <MDBDropdownItem link><RiTodoFill/> Finished</MDBDropdownItem>
                    </Link>
                </MDBDropdownMenu>
                </MDBDropdown>
                </MDBNavbarLink>
              </MDBNavbarItem>

              {location.pathname==="/addtask"?(
                <>
                </>
              ):(
                <>
                    <MDBNavbarItem className="margin-left my-2">
                    <MDBTooltip tag='a' wrapperProps={{ href: '#' }} title="Add New Task">
                        <MDBBtn  floating  href='addtask'>
                            <FiPlus color={'white'} className='plus my-2' size={20}/>
                        </MDBBtn>
                        </MDBTooltip>
                    </MDBNavbarItem>
                </>
              )}
              
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}