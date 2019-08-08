import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { breakpoints, colors } from '../utils/variables'
import Hamburger from '../resources/hamburger.svg'
import Mutliply from '../resources/multiply.svg'

const StyledNav = styled.div`

    @media(max-width: ${breakpoints.sm}) {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 100vh;
    }

    .nav {
        position: relative;
        padding-top: 10rem;
        margin-bottom: 10rem;

        @media(max-width: ${breakpoints.sm}) {
            padding-top: 0;
        }

        &__button {
            border: none;
            background: #fff;

            &-container {
                position: absolute;
                top: 2rem;
                right: 2rem;
            }

            img {
                height: 4rem;
            }

            @media(min-width: ${breakpoints.sm}) {
                display: none;
            }
        }

        &__items {
            display: flex;
            justify-content: flex-end;
            list-style: none;
            width: 100%;

            @media(max-width: ${breakpoints.sm}) {
                flex-direction: column;
                text-align: center;
                justify-content: center;
                align-items: center;
                height: 100vh;
                background: white;
            }
        }

        &__item {

            margin-bottom: 3rem;

            @media(min-width: ${breakpoints.sm}) {
                &:not(:last-child) {
                    margin-right: 3rem;
                }
            }

            @media(max-width: ${breakpoints.sm}) {
                width: 100vw;
            }
        }

        &__link {
            width: 100%;
            text-decoration: none;
            color: inherit;
            display: block;
        }
    }
`

class Nav extends React.Component {

    state = {
        isNavRendered: true,
    }

    componentDidMount() {
        if (window.innerWidth <= 543) {
            this.toggleNavigation()
        }
    }

    toggleNavigation = () => {
        this.setState({ isNavRendered: !this.state.isNavRendered })
    }

    render() {
        const event = window.innerWidth <= 543 ? this.toggleNavigation : null
        return (
            <StyledNav>
                <nav className="nav">
                    <div className="nav__button-container">
                        <button
                            class="nav__button"
                            aria-label="Navigation Toggle"
                            onClick={this.toggleNavigation}
                        >
                            { this.state.isNavRendered ? <img src={Mutliply} alt="close menu icon"/> : <img src={Hamburger} alt="hamburger menu icon"/> }

                        </button>
                    </div>
                    {
                        this.state.isNavRendered &&
                        <ul className="nav__items">
                            <li className="nav__item" onClick={event}>
                                <a href="#features" className="nav__link">Features</a>
                            </li>
                            <li className="nav__item" onClick={event}>
                                <Link to="#" className="nav__link">Documentation</Link>
                            </li>
                            <li className="nav__item" onClick={event}>
                                <a href="https://spectrum.chat/theia" target="_blank" className="nav__link">Comunity</a>
                            </li>
                            <li className="nav__item" onClick={event}>
                                <a href="https://typefox.io/eclipse-theia" className="nav__link" target="_blank">Support</a>
                            </li>
                            <li className="nav__item" onClick={event}>
                                <a href="https://typefox.io/trainings-2" className="nav__link" target="_blank">Training</a>
                            </li>
                        </ul>
                    }
                </nav>
            </StyledNav>
        )
    }
}

export default Nav