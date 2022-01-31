import React from 'react'
import '../../styles/style.css';
import { AiOutlineClose } from 'react-icons/ai'
import { FaRegWindowMinimize } from 'react-icons/fa'
import { FiMaximize } from 'react-icons/fi'
import styled from 'styled-components';

const Wrapper = styled.nav`
	z-index: 10;
	padding-left: 20px;
	svg {
		color: #7b8190;
	}
	.right > button:hover {
		background-color: #36618c;
		svg {
			color: white;
		}
	}
`

const iconSize = 12;

export default function AppBar() {
	return (
		<Wrapper
			className="bg-dark d-flex justify-content-between align-items-center fixed-top"
		>
			<div className="w-100 app-bar">
				<h5 className="ml-4 mb-0 text-white">Calfary</h5>
			</div>
			<div className="d-flex right">
				<button className="btn nav-link dropdown-toggle arrow-none" onClick={() => alert('Yup')}>
					<FaRegWindowMinimize size={iconSize} />
				</button>
				<button className="btn nav-link dropdown-toggle arrow-none">
					<FiMaximize size={iconSize} />
				</button>
				<button className="btn nav-link dropdown-toggle arrow-none" onClick={()=> {
					window.close()
				}}>
					<AiOutlineClose size={iconSize} />
				</button>
			</div>
		</Wrapper>
	)
}
