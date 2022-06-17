import React from "react";
import "./Checkout3D.css";


export default function Checkout3D() {

  return (
    <div style={{ position: "relative", overflow: "hidden", backgroundColor: "rgba(255,255,255,0.1)" }}>
      <div className="container_checkout">
        <div className="cube">
          <div className="cube__side cube__side--front" />
          <div className="cube__side cube__side--back">
            <div className="screen">
              <div className="video">

                <video className="video-player" src="media/sintel.mp4" preload="auto" poster={require('./media/sintel.jpg')}>
                  <source src={require('./media/sintel.ogg')} type='video/ogg; codecs="theora, vorbis"' />
                  <source src={require("./media/sintel.mp4")} type='video/mp4; codecs="avc1.4D401E, mp4a.40.2"' />
                  <p>Sorry, but your browser does not support this video format.</p>
                </video>
                <button className="action action--play action--shown" aria-label="Play Video" />
              </div>
              <div className="intro intro--shown">
                <div className="intro__side"></div>
                <div className="intro__side">
                  <button className="action action--seats">Select your seats</button>
                </div>
              </div>
            </div>
          </div>
          <div className="rows rows--large">
            <div className="row">
              <div data-seat="A1" className="row__seat" />
              <div data-seat="A2" className="row__seat" />
              <div data-seat="A3" className="row__seat" />
              <div data-seat="A4" className="row__seat" />
              <div data-seat="A5" className="row__seat" />
              <div data-seat="A6" className="row__seat" />
              <div data-seat="A7" className="row__seat" />
              <div data-seat="A8" className="row__seat" />
              <div data-seat="A9" className="row__seat" />
              <div data-seat="A10" className="row__seat" />
              <div data-seat="A11" className="row__seat" />
              <div data-seat="A12" className="row__seat" />
              <div data-seat="A13" className="row__seat" />
              <div data-seat="A14" className="row__seat" />
              <div data-seat="A15" className="row__seat" />
              <div data-seat="A16" className="row__seat" />
              <div data-seat="A17" className="row__seat" />
              <div data-seat="A18" className="row__seat" />
            </div>
            <div className="row">
              <div data-seat="B1" className="row__seat" />
              <div data-seat="B2" className="row__seat" />
              <div data-seat="B3" className="row__seat" />
              <div data-seat="B4" className="row__seat" />
              <div data-seat="B5" className="row__seat" />
              <div data-seat="B6" className="row__seat" />
              <div data-seat="B7" className="row__seat" />
              <div data-seat="B8" className="row__seat" />
              <div data-seat="B9" className="row__seat" />
              <div data-seat="B10" className="row__seat" />
              <div data-seat="B11" className="row__seat" />
              <div data-seat="B12" className="row__seat" />
              <div data-seat="B13" className="row__seat" />
              <div data-seat="B14" className="row__seat" />
              <div data-seat="B15" className="row__seat" />
              <div data-seat="B16" className="row__seat" />
              <div data-seat="B17" className="row__seat" />
              <div data-seat="B18" className="row__seat" />
            </div>
            <div className="row">
              <div data-seat="C1" className="row__seat" />
              <div data-seat="C2" className="row__seat" />
              <div data-seat="C3" className="row__seat" />
              <div data-seat="C4" className="row__seat" />
              <div data-seat="C5" className="row__seat" />
              <div data-seat="C6" className="row__seat" />
              <div data-seat="C7" className="row__seat" />
              <div data-seat="C8" className="row__seat" />
              <div data-seat="C9" className="row__seat" />
              <div data-seat="C10" className="row__seat" />
              <div data-seat="C11" className="row__seat" />
              <div data-seat="C12" className="row__seat" />
              <div data-seat="C13" className="row__seat" />
              <div data-seat="C14" className="row__seat" />
              <div data-seat="C15" className="row__seat" />
              <div data-seat="C16" className="row__seat" />
              <div data-seat="C17" className="row__seat" />
              <div data-seat="C18" className="row__seat" />
            </div>
            <div className="row">
              <div data-seat="D1" className="row__seat" />
              <div data-seat="D2" className="row__seat" />
              <div data-seat="D3" className="row__seat" />
              <div data-seat="D4" className="row__seat" />
              <div data-seat="D5" className="row__seat" />
              <div data-seat="D6" className="row__seat" />
              <div data-seat="D7" className="row__seat" />
              <div data-seat="D8" className="row__seat" />
              <div data-seat="D9" className="row__seat" />
              <div data-seat="D10" className="row__seat" />
              <div data-seat="D11" className="row__seat" />
              <div data-seat="D12" className="row__seat" />
              <div data-seat="D13" className="row__seat" />
              <div data-seat="D14" className="row__seat" />
              <div data-seat="D15" className="row__seat" />
              <div data-seat="D16" className="row__seat" />
              <div data-seat="D17" className="row__seat" />
              <div data-seat="D18" className="row__seat" />
            </div>
            <div className="row">
              <div data-seat="E1" className="row__seat" />
              <div data-seat="E2" className="row__seat" />
              <div data-seat="E3" className="row__seat" />
              <div data-seat="E4" className="row__seat" />
              <div data-seat="E5" className="row__seat" />
              <div data-seat="E6" className="row__seat" />
              <div data-seat="E7" className="row__seat" />
              <div data-seat="E8" className="row__seat" />
              <div data-seat="E9" className="row__seat" />
              <div data-seat="E10" className="row__seat" />
              <div data-seat="E11" className="row__seat" />
              <div data-seat="E12" className="row__seat" />
              <div data-seat="E13" className="row__seat" />
              <div data-seat="E14" className="row__seat" />
              <div data-seat="E15" className="row__seat" />
              <div data-seat="E16" className="row__seat" />
              <div data-seat="E17" className="row__seat" />
              <div data-seat="E18" className="row__seat" />
            </div>
            <div className="row">
              <div data-seat="F1" className="row__seat" />
              <div data-seat="F2" className="row__seat" />
              <div data-seat="F3" className="row__seat" />
              <div data-seat="F4" className="row__seat" />
              <div data-seat="F5" className="row__seat" />
              <div data-seat="F6" className="row__seat" />
              <div data-seat="F7" className="row__seat" />
              <div data-seat="F8" className="row__seat" />
              <div data-seat="F9" className="row__seat" />
              <div data-seat="F10" className="row__seat" />
              <div data-seat="F11" className="row__seat" />
              <div data-seat="F12" className="row__seat" />
              <div data-seat="F13" className="row__seat" />
              <div data-seat="F14" className="row__seat" />
              <div data-seat="F15" className="row__seat" />
              <div data-seat="F16" className="row__seat" />
              <div data-seat="F17" className="row__seat" />
              <div data-seat="F18" className="row__seat" />
            </div>
            <div className="row">
              <div data-seat="G1" className="row__seat" />
              <div data-seat="G2" className="row__seat" />
              <div data-seat="G3" className="row__seat" />
              <div data-seat="G4" className="row__seat" />
              <div data-seat="G5" className="row__seat" />
              <div data-seat="G6" className="row__seat" />
              <div data-seat="G7" className="row__seat" />
              <div data-seat="G8" className="row__seat" />
              <div data-seat="G9" className="row__seat" />
              <div data-seat="G10" className="row__seat" />
              <div data-seat="G11" className="row__seat" />
              <div data-seat="G12" className="row__seat" />
              <div data-seat="G13" className="row__seat" />
              <div data-seat="G14" className="row__seat" />
              <div data-seat="G15" className="row__seat" />
              <div data-seat="G16" className="row__seat" />
              <div data-seat="G17" className="row__seat" />
              <div data-seat="G18" className="row__seat" />
            </div>
            <div className="row">
              <div data-seat="H1" className="row__seat" />
              <div data-seat="H2" className="row__seat" />
              <div data-seat="H3" className="row__seat" />
              <div data-seat="H4" className="row__seat" />
              <div data-seat="H5" className="row__seat" />
              <div data-seat="H6" className="row__seat" />
              <div data-seat="H7" className="row__seat" />
              <div data-seat="H8" className="row__seat" />
              <div data-seat="H9" className="row__seat" />
              <div data-seat="H10" className="row__seat" />
              <div data-seat="H11" className="row__seat" />
              <div data-seat="H12" className="row__seat" />
              <div data-seat="H13" className="row__seat" />
              <div data-seat="H14" className="row__seat" />
              <div data-seat="H15" className="row__seat" />
              <div data-seat="H16" className="row__seat" />
              <div data-seat="H17" className="row__seat" />
              <div data-seat="H18" className="row__seat" />
            </div>
            <div className="row">
              <div data-seat="I1" className="row__seat" />
              <div data-seat="I2" className="row__seat" />
              <div data-seat="I3" className="row__seat" />
              <div data-seat="I4" className="row__seat" />
              <div data-seat="I5" className="row__seat" />
              <div data-seat="I6" className="row__seat" />
              <div data-seat="I7" className="row__seat" />
              <div data-seat="I8" className="row__seat" />
              <div data-seat="I9" className="row__seat" />
              <div data-seat="I10" className="row__seat" />
              <div data-seat="I11" className="row__seat" />
              <div data-seat="I12" className="row__seat" />
              <div data-seat="I13" className="row__seat" />
              <div data-seat="I14" className="row__seat" />
              <div data-seat="I15" className="row__seat" />
              <div data-seat="I16" className="row__seat" />
              <div data-seat="I17" className="row__seat" />
              <div data-seat="I18" className="row__seat" />
            </div>
            <div className="row">
              <div data-seat="J1" className="row__seat" />
              <div data-seat="J2" className="row__seat" />
              <div data-seat="J3" className="row__seat" />
              <div data-seat="J4" className="row__seat" />
              <div data-seat="J5" className="row__seat" />
              <div data-seat="J6" className="row__seat" />
              <div data-seat="J7" className="row__seat" />
              <div data-seat="J8" className="row__seat" />
              <div data-seat="J9" className="row__seat" />
              <div data-seat="J10" className="row__seat" />
              <div data-seat="J11" className="row__seat" />
              <div data-seat="J12" className="row__seat" />
              <div data-seat="J13" className="row__seat" />
              <div data-seat="J14" className="row__seat" />
              <div data-seat="J15" className="row__seat" />
              <div data-seat="J16" className="row__seat" />
              <div data-seat="J17" className="row__seat" />
              <div data-seat="J18" className="row__seat" />
            </div>
            <div className="row">
              <div data-seat="K1" className="row__seat" />
              <div data-seat="K2" className="row__seat" />
              <div data-seat="K3" className="row__seat" />
              <div data-seat="K4" className="row__seat" />
              <div data-seat="K5" className="row__seat" />
              <div data-seat="K6" className="row__seat" />
              <div data-seat="K7" className="row__seat" />
              <div data-seat="K8" className="row__seat" />
              <div data-seat="K9" className="row__seat" />
              <div data-seat="K10" className="row__seat" />
              <div data-seat="K11" className="row__seat" />
              <div data-seat="K12" className="row__seat" />
              <div data-seat="K13" className="row__seat" />
              <div data-seat="K14" className="row__seat" />
              <div data-seat="K15" className="row__seat" />
              <div data-seat="K16" className="row__seat" />
              <div data-seat="K17" className="row__seat" />
              <div data-seat="K18" className="row__seat" />
            </div>
            <div className="row">
              <div data-seat="L1" className="row__seat" />
              <div data-seat="L2" className="row__seat" />
              <div data-seat="L3" className="row__seat" />
              <div data-seat="L4" className="row__seat" />
              <div data-seat="L5" className="row__seat" />
              <div data-seat="L6" className="row__seat" />
              <div data-seat="L7" className="row__seat" />
              <div data-seat="L8" className="row__seat" />
              <div data-seat="L9" className="row__seat" />
              <div data-seat="L10" className="row__seat" />
              <div data-seat="L11" className="row__seat" />
              <div data-seat="L12" className="row__seat" />
              <div data-seat="L13" className="row__seat" />
              <div data-seat="L14" className="row__seat" />
              <div data-seat="L15" className="row__seat" />
              <div data-seat="L16" className="row__seat" />
              <div data-seat="L17" className="row__seat" />
              <div data-seat="L18" className="row__seat" />
            </div>
            <div className="row">
              <div data-seat="M1" className="row__seat" />
              <div data-seat="M2" className="row__seat" />
              <div data-seat="M3" className="row__seat" />
              <div data-seat="M4" className="row__seat" />
              <div data-seat="M5" className="row__seat" />
              <div data-seat="M6" className="row__seat" />
              <div data-seat="M7" className="row__seat" />
              <div data-seat="M8" className="row__seat" />
              <div data-seat="M9" className="row__seat" />
              <div data-seat="M10" className="row__seat" />
              <div data-seat="M11" className="row__seat" />
              <div data-seat="M12" className="row__seat" />
              <div data-seat="M13" className="row__seat" />
              <div data-seat="M14" className="row__seat" />
              <div data-seat="M15" className="row__seat" />
              <div data-seat="M16" className="row__seat" />
              <div data-seat="M17" className="row__seat" />
              <div data-seat="M18" className="row__seat" />
            </div>
            <div className="row">
              <div data-seat="N1" className="row__seat" />
              <div data-seat="N2" className="row__seat" />
              <div data-seat="N3" className="row__seat" />
              <div data-seat="N4" className="row__seat" />
              <div data-seat="N5" className="row__seat" />
              <div data-seat="N6" className="row__seat" />
              <div data-seat="N7" className="row__seat" />
              <div data-seat="N8" className="row__seat" />
              <div data-seat="N9" className="row__seat" />
              <div data-seat="N10" className="row__seat" />
              <div data-seat="N11" className="row__seat" />
              <div data-seat="N12" className="row__seat" />
              <div data-seat="N13" className="row__seat" />
              <div data-seat="N14" className="row__seat" />
              <div data-seat="N15" className="row__seat" />
              <div data-seat="N16" className="row__seat" />
              <div data-seat="N17" className="row__seat" />
              <div data-seat="N18" className="row__seat" />
            </div>
            <div className="row">
              <div data-seat="O1" className="row__seat" />
              <div data-seat="O2" className="row__seat" />
              <div data-seat="O3" className="row__seat" />
              <div data-seat="O4" className="row__seat" />
              <div data-seat="O5" className="row__seat" />
              <div data-seat="O6" className="row__seat" />
              <div data-seat="O7" className="row__seat" />
              <div data-seat="O8" className="row__seat" />
              <div data-seat="O9" className="row__seat" />
              <div data-seat="O10" className="row__seat" />
              <div data-seat="O11" className="row__seat" />
              <div data-seat="O12" className="row__seat" />
              <div data-seat="O13" className="row__seat" />
              <div data-seat="O14" className="row__seat" />
              <div data-seat="O15" className="row__seat" />
              <div data-seat="O16" className="row__seat" />
              <div data-seat="O17" className="row__seat" />
              <div data-seat="O18" className="row__seat" />
            </div>
            <div className="row">
              <div data-seat="P1" className="row__seat" />
              <div data-seat="P2" className="row__seat" />
              <div data-seat="P3" className="row__seat" />
              <div data-seat="P4" className="row__seat" />
              <div data-seat="P5" className="row__seat" />
              <div data-seat="P6" className="row__seat" />
              <div data-seat="P7" className="row__seat" />
              <div data-seat="P8" className="row__seat" />
              <div data-seat="P9" className="row__seat" />
              <div data-seat="P10" className="row__seat" />
              <div data-seat="P11" className="row__seat" />
              <div data-seat="P12" className="row__seat" />
              <div data-seat="P13" className="row__seat" />
              <div data-seat="P14" className="row__seat" />
              <div data-seat="P15" className="row__seat" />
              <div data-seat="P16" className="row__seat" />
              <div data-seat="P17" className="row__seat" />
              <div data-seat="P18" className="row__seat" />
            </div>
            <div className="row">
              <div data-seat="Q1" className="row__seat" />
              <div data-seat="Q2" className="row__seat" />
              <div data-seat="Q3" className="row__seat" />
              <div data-seat="Q4" className="row__seat" />
              <div data-seat="Q5" className="row__seat" />
              <div data-seat="Q6" className="row__seat" />
              <div data-seat="Q7" className="row__seat" />
              <div data-seat="Q8" className="row__seat" />
              <div data-seat="Q9" className="row__seat" />
              <div data-seat="Q10" className="row__seat" />
              <div data-seat="Q11" className="row__seat" />
              <div data-seat="Q12" className="row__seat" />
              <div data-seat="Q13" className="row__seat" />
              <div data-seat="Q14" className="row__seat" />
              <div data-seat="Q15" className="row__seat" />
              <div data-seat="Q16" className="row__seat" />
              <div data-seat="Q17" className="row__seat" />
              <div data-seat="Q18" className="row__seat" />
            </div>
            <div className="row">
              <div data-seat="R1" className="row__seat" />
              <div data-seat="R2" className="row__seat" />
              <div data-seat="R3" className="row__seat" />
              <div data-seat="R4" className="row__seat" />
              <div data-seat="R5" className="row__seat" />
              <div data-seat="R6" className="row__seat" />
              <div data-seat="R7" className="row__seat" />
              <div data-seat="R8" className="row__seat" />
              <div data-seat="R9" className="row__seat" />
              <div data-seat="R10" className="row__seat" />
              <div data-seat="R11" className="row__seat" />
              <div data-seat="R12" className="row__seat" />
              <div data-seat="R13" className="row__seat" />
              <div data-seat="R14" className="row__seat" />
              <div data-seat="R15" className="row__seat" />
              <div data-seat="R16" className="row__seat" />
              <div data-seat="R17" className="row__seat" />
              <div data-seat="R18" className="row__seat" />
            </div>
          </div>
        </div>
      </div>
      <div className="plan">
        <h3 className="plan__title">Seating Plan</h3>
        <div className="rows rows--mini">
          <div className="row">
            <div className="row__seat tooltip" data-tooltip="A1" />
            <div className="row__seat tooltip" data-tooltip="A2" />
            <div className="row__seat tooltip" data-tooltip="A3" />
            <div className="row__seat tooltip" data-tooltip="A4" />
            <div className="row__seat tooltip" data-tooltip="A5" />
            <div className="row__seat tooltip" data-tooltip="A6" />
            <div className="row__seat tooltip" data-tooltip="A7" />
            <div className="row__seat tooltip" data-tooltip="A8" />
            <div className="row__seat tooltip" data-tooltip="A9" />
            <div className="row__seat row__seat--reserved" />
            <div className="row__seat row__seat--reserved" />
            <div className="row__seat row__seat--reserved" />
            <div className="row__seat tooltip" data-tooltip="A13" />
            <div className="row__seat tooltip" data-tooltip="A14" />
            <div className="row__seat tooltip" data-tooltip="A15" />
            <div className="row__seat tooltip" data-tooltip="A16" />
            <div className="row__seat tooltip" data-tooltip="A17" />
            <div className="row__seat tooltip" data-tooltip="A18" />
          </div>
          <div className="row">
            <div className="row__seat tooltip" data-tooltip="B1" />
            <div className="row__seat tooltip" data-tooltip="B2" />
            <div className="row__seat tooltip" data-tooltip="B3" />
            <div className="row__seat tooltip" data-tooltip="B4" />
            <div className="row__seat tooltip" data-tooltip="B5" />
            <div className="row__seat tooltip" data-tooltip="B6" />
            <div className="row__seat tooltip" data-tooltip="B7" />
            <div className="row__seat tooltip" data-tooltip="B8" />
            <div className="row__seat row__seat--reserved" />
            <div className="row__seat row__seat--reserved" />
            <div className="row__seat tooltip" data-tooltip="B11" />
            <div className="row__seat tooltip" data-tooltip="B12" />
            <div className="row__seat tooltip" data-tooltip="B13" />
            <div className="row__seat tooltip" data-tooltip="B14" />
            <div className="row__seat tooltip" data-tooltip="B15" />
            <div className="row__seat tooltip" data-tooltip="B16" />
            <div className="row__seat tooltip" data-tooltip="B17" />
            <div className="row__seat tooltip" data-tooltip="B18" />
          </div>
          <div className="row">
            <div className="row__seat tooltip" data-tooltip="C1" />
            <div className="row__seat tooltip" data-tooltip="C2" />
            <div className="row__seat tooltip" data-tooltip="C3" />
            <div className="row__seat tooltip" data-tooltip="C4" />
            <div className="row__seat row__seat--reserved" />
            <div className="row__seat row__seat--reserved" />
            <div className="row__seat row__seat--reserved" />
            <div className="row__seat tooltip" data-tooltip="C8" />
            <div className="row__seat tooltip" data-tooltip="C9" />
            <div className="row__seat tooltip" data-tooltip="C10" />
            <div className="row__seat tooltip" data-tooltip="C11" />
            <div className="row__seat tooltip" data-tooltip="C12" />
            <div className="row__seat tooltip" data-tooltip="C13" />
            <div className="row__seat tooltip" data-tooltip="C14" />
            <div className="row__seat tooltip" data-tooltip="C15" />
            <div className="row__seat tooltip" data-tooltip="C16" />
            <div className="row__seat tooltip" data-tooltip="C17" />
            <div className="row__seat tooltip" data-tooltip="C18" />
          </div>
          <div className="row">
            <div className="row__seat tooltip" data-tooltip="D1" />
            <div className="row__seat tooltip" data-tooltip="D2" />
            <div className="row__seat tooltip" data-tooltip="D3" />
            <div className="row__seat tooltip" data-tooltip="D4" />
            <div className="row__seat tooltip" data-tooltip="D5" />
            <div className="row__seat tooltip" data-tooltip="D6" />
            <div className="row__seat tooltip" data-tooltip="D7" />
            <div className="row__seat tooltip" data-tooltip="D8" />
            <div className="row__seat tooltip" data-tooltip="D9" />
            <div className="row__seat tooltip" data-tooltip="D10" />
            <div className="row__seat tooltip" data-tooltip="D11" />
            <div className="row__seat tooltip" data-tooltip="D12" />
            <div className="row__seat tooltip" data-tooltip="D13" />
            <div className="row__seat tooltip" data-tooltip="D14" />
            <div className="row__seat tooltip" data-tooltip="D15" />
            <div className="row__seat row__seat--reserved" />
            <div className="row__seat row__seat--reserved" />
            <div className="row__seat row__seat--reserved" />
          </div>
          <div className="row">
            <div className="row__seat tooltip" data-tooltip="E1" />
            <div className="row__seat tooltip" data-tooltip="E2" />
            <div className="row__seat tooltip" data-tooltip="E3" />
            <div className="row__seat tooltip" data-tooltip="E4" />
            <div className="row__seat tooltip" data-tooltip="E5" />
            <div className="row__seat tooltip" data-tooltip="E6" />
            <div className="row__seat tooltip" data-tooltip="E7" />
            <div className="row__seat tooltip" data-tooltip="E8" />
            <div className="row__seat tooltip" data-tooltip="E9" />
            <div className="row__seat row__seat--reserved" />
            <div className="row__seat row__seat--reserved" />
            <div className="row__seat tooltip" data-tooltip="E12" />
            <div className="row__seat tooltip" data-tooltip="E13" />
            <div className="row__seat tooltip" data-tooltip="E14" />
            <div className="row__seat tooltip" data-tooltip="E15" />
            <div className="row__seat tooltip" data-tooltip="E16" />
            <div className="row__seat tooltip" data-tooltip="E17" />
            <div className="row__seat tooltip" data-tooltip="E18" />
          </div>
          <div className="row">
            <div className="row__seat tooltip" data-tooltip="F1" />
            <div className="row__seat row__seat--reserved" />
            <div className="row__seat tooltip" data-tooltip="F3" />
            <div className="row__seat tooltip" data-tooltip="F4" />
            <div className="row__seat tooltip" data-tooltip="F5" />
            <div className="row__seat tooltip" data-tooltip="F6" />
            <div className="row__seat tooltip" data-tooltip="F7" />
            <div className="row__seat tooltip" data-tooltip="F8" />
            <div className="row__seat tooltip" data-tooltip="F9" />
            <div className="row__seat tooltip" data-tooltip="F10" />
            <div className="row__seat tooltip" data-tooltip="F11" />
            <div className="row__seat tooltip" data-tooltip="F12" />
            <div className="row__seat tooltip" data-tooltip="F13" />
            <div className="row__seat tooltip" data-tooltip="F14" />
            <div className="row__seat tooltip" data-tooltip="F15" />
            <div className="row__seat tooltip" data-tooltip="F16" />
            <div className="row__seat tooltip" data-tooltip="F17" />
            <div className="row__seat tooltip" data-tooltip="F18" />
          </div>
          <div className="row">
            <div className="row__seat tooltip" data-tooltip="G1" />
            <div className="row__seat tooltip" data-tooltip="G2" />
            <div className="row__seat tooltip" data-tooltip="G3" />
            <div className="row__seat tooltip" data-tooltip="G4" />
            <div className="row__seat tooltip" data-tooltip="G5" />
            <div className="row__seat tooltip" data-tooltip="G6" />
            <div className="row__seat row__seat--reserved" />
            <div className="row__seat row__seat--reserved" />
            <div className="row__seat tooltip" data-tooltip="G9" />
            <div className="row__seat tooltip" data-tooltip="G10" />
            <div className="row__seat tooltip" data-tooltip="G11" />
            <div className="row__seat tooltip" data-tooltip="G12" />
            <div className="row__seat tooltip" data-tooltip="G13" />
            <div className="row__seat tooltip" data-tooltip="G14" />
            <div className="row__seat tooltip" data-tooltip="G15" />
            <div className="row__seat tooltip" data-tooltip="G16" />
            <div className="row__seat tooltip" data-tooltip="G17" />
            <div className="row__seat tooltip" data-tooltip="G18" />
          </div>
          <div className="row">
            <div className="row__seat tooltip" data-tooltip="H1" />
            <div className="row__seat tooltip" data-tooltip="H2" />
            <div className="row__seat tooltip" data-tooltip="H3" />
            <div className="row__seat tooltip" data-tooltip="H4" />
            <div className="row__seat tooltip" data-tooltip="H5" />
            <div className="row__seat tooltip" data-tooltip="H6" />
            <div className="row__seat tooltip" data-tooltip="H7" />
            <div className="row__seat tooltip" data-tooltip="H8" />
            <div className="row__seat tooltip" data-tooltip="H9" />
            <div className="row__seat tooltip" data-tooltip="H10" />
            <div className="row__seat tooltip" data-tooltip="H11" />
            <div className="row__seat tooltip" data-tooltip="H12" />
            <div className="row__seat tooltip" data-tooltip="H13" />
            <div className="row__seat tooltip" data-tooltip="H14" />
            <div className="row__seat tooltip" data-tooltip="H15" />
            <div className="row__seat tooltip" data-tooltip="H16" />
            <div className="row__seat tooltip" data-tooltip="H17" />
            <div className="row__seat tooltip" data-tooltip="H18" />
          </div>
          <div className="row">
            <div className="row__seat tooltip" data-tooltip="I1" />
            <div className="row__seat tooltip" data-tooltip="I2" />
            <div className="row__seat tooltip" data-tooltip="I3" />
            <div className="row__seat tooltip" data-tooltip="I4" />
            <div className="row__seat tooltip" data-tooltip="I5" />
            <div className="row__seat tooltip" data-tooltip="I6" />
            <div className="row__seat tooltip" data-tooltip="I7" />
            <div className="row__seat tooltip" data-tooltip="I8" />
            <div className="row__seat tooltip" data-tooltip="I9" />
            <div className="row__seat tooltip" data-tooltip="I10" />
            <div className="row__seat tooltip" data-tooltip="I11" />
            <div className="row__seat tooltip" data-tooltip="I12" />
            <div className="row__seat tooltip" data-tooltip="I13" />
            <div className="row__seat tooltip" data-tooltip="I14" />
            <div className="row__seat tooltip" data-tooltip="I15" />
            <div className="row__seat tooltip" data-tooltip="I16" />
            <div className="row__seat tooltip" data-tooltip="I17" />
            <div className="row__seat tooltip" data-tooltip="I18" />
          </div>
          <div className="row">
            <div className="row__seat tooltip" data-tooltip="J1" />
            <div className="row__seat tooltip" data-tooltip="J2" />
            <div className="row__seat tooltip" data-tooltip="J3" />
            <div className="row__seat tooltip" data-tooltip="J4" />
            <div className="row__seat row__seat--reserved" />
            <div className="row__seat row__seat--reserved" />
            <div className="row__seat row__seat--reserved" />
            <div className="row__seat tooltip" data-tooltip="J8" />
            <div className="row__seat tooltip" data-tooltip="J9" />
            <div className="row__seat tooltip" data-tooltip="J10" />
            <div className="row__seat tooltip" data-tooltip="J11" />
            <div className="row__seat tooltip" data-tooltip="J12" />
            <div className="row__seat tooltip" data-tooltip="J13" />
            <div className="row__seat tooltip" data-tooltip="J14" />
            <div className="row__seat tooltip" data-tooltip="J15" />
            <div className="row__seat tooltip" data-tooltip="J16" />
            <div className="row__seat tooltip" data-tooltip="J17" />
            <div className="row__seat tooltip" data-tooltip="J18" />
          </div>
          <div className="row">
            <div className="row__seat tooltip" data-tooltip="K1" />
            <div className="row__seat tooltip" data-tooltip="K2" />
            <div className="row__seat tooltip" data-tooltip="K3" />
            <div className="row__seat tooltip" data-tooltip="K4" />
            <div className="row__seat tooltip" data-tooltip="K5" />
            <div className="row__seat tooltip" data-tooltip="K6" />
            <div className="row__seat tooltip" data-tooltip="K7" />
            <div className="row__seat tooltip" data-tooltip="K8" />
            <div className="row__seat tooltip" data-tooltip="K9" />
            <div className="row__seat tooltip" data-tooltip="K10" />
            <div className="row__seat tooltip" data-tooltip="K11" />
            <div className="row__seat tooltip" data-tooltip="K12" />
            <div className="row__seat tooltip" data-tooltip="K13" />
            <div className="row__seat tooltip" data-tooltip="K14" />
            <div className="row__seat tooltip" data-tooltip="K15" />
            <div className="row__seat tooltip" data-tooltip="K16" />
            <div className="row__seat tooltip" data-tooltip="K17" />
            <div className="row__seat tooltip" data-tooltip="K18" />
          </div>
          <div className="row">
            <div className="row__seat tooltip" data-tooltip="L1" />
            <div className="row__seat tooltip" data-tooltip="L2" />
            <div className="row__seat tooltip" data-tooltip="L3" />
            <div className="row__seat tooltip" data-tooltip="L4" />
            <div className="row__seat tooltip" data-tooltip="L5" />
            <div className="row__seat tooltip" data-tooltip="L6" />
            <div className="row__seat tooltip" data-tooltip="L7" />
            <div className="row__seat tooltip" data-tooltip="L8" />
            <div className="row__seat tooltip" data-tooltip="L9" />
            <div className="row__seat tooltip" data-tooltip="L10" />
            <div className="row__seat tooltip" data-tooltip="L11" />
            <div className="row__seat tooltip" data-tooltip="L12" />
            <div className="row__seat tooltip" data-tooltip="L13" />
            <div className="row__seat row__seat--reserved" />
            <div className="row__seat row__seat--reserved" />
            <div className="row__seat row__seat--reserved" />
            <div className="row__seat tooltip" data-tooltip="L17" />
            <div className="row__seat tooltip" data-tooltip="L18" />
          </div>
          <div className="row">
            <div className="row__seat tooltip" data-tooltip="M1" />
            <div className="row__seat tooltip" data-tooltip="M2" />
            <div className="row__seat tooltip" data-tooltip="M3" />
            <div className="row__seat tooltip" data-tooltip="M4" />
            <div className="row__seat tooltip" data-tooltip="M5" />
            <div className="row__seat tooltip" data-tooltip="M6" />
            <div className="row__seat tooltip" data-tooltip="M7" />
            <div className="row__seat tooltip" data-tooltip="M8" />
            <div className="row__seat tooltip" data-tooltip="M9" />
            <div className="row__seat row__seat--reserved" />
            <div className="row__seat row__seat--reserved" />
            <div className="row__seat row__seat--reserved" />
            <div className="row__seat row__seat--reserved" />
            <div className="row__seat tooltip" data-tooltip="M14" />
            <div className="row__seat tooltip" data-tooltip="M15" />
            <div className="row__seat tooltip" data-tooltip="M16" />
            <div className="row__seat tooltip" data-tooltip="M17" />
            <div className="row__seat tooltip" data-tooltip="M18" />
          </div>
          <div className="row">
            <div className="row__seat tooltip" data-tooltip="N1" />
            <div className="row__seat tooltip" data-tooltip="N2" />
            <div className="row__seat row__seat--reserved" />
            <div className="row__seat row__seat--reserved" />
            <div className="row__seat tooltip" data-tooltip="N5" />
            <div className="row__seat tooltip" data-tooltip="N6" />
            <div className="row__seat tooltip" data-tooltip="N7" />
            <div className="row__seat tooltip" data-tooltip="N8" />
            <div className="row__seat tooltip" data-tooltip="N9" />
            <div className="row__seat tooltip" data-tooltip="N10" />
            <div className="row__seat tooltip" data-tooltip="N11" />
            <div className="row__seat tooltip" data-tooltip="N12" />
            <div className="row__seat tooltip" data-tooltip="N13" />
            <div className="row__seat tooltip" data-tooltip="N14" />
            <div className="row__seat tooltip" data-tooltip="N15" />
            <div className="row__seat tooltip" data-tooltip="N16" />
            <div className="row__seat tooltip" data-tooltip="N17" />
            <div className="row__seat tooltip" data-tooltip="N18" />
          </div>
          <div className="row">
            <div className="row__seat tooltip" data-tooltip="O1" />
            <div className="row__seat tooltip" data-tooltip="O2" />
            <div className="row__seat tooltip" data-tooltip="O3" />
            <div className="row__seat tooltip" data-tooltip="O4" />
            <div className="row__seat tooltip" data-tooltip="O5" />
            <div className="row__seat tooltip" data-tooltip="O6" />
            <div className="row__seat tooltip" data-tooltip="O7" />
            <div className="row__seat tooltip" data-tooltip="O8" />
            <div className="row__seat tooltip" data-tooltip="O9" />
            <div className="row__seat tooltip" data-tooltip="O10" />
            <div className="row__seat tooltip" data-tooltip="O11" />
            <div className="row__seat tooltip" data-tooltip="O12" />
            <div className="row__seat tooltip" data-tooltip="O13" />
            <div className="row__seat row__seat--reserved" />
            <div className="row__seat row__seat--reserved" />
            <div className="row__seat tooltip" data-tooltip="O16" />
            <div className="row__seat tooltip" data-tooltip="O17" />
            <div className="row__seat tooltip" data-tooltip="O18" />
          </div>
          <div className="row">
            <div className="row__seat tooltip" data-tooltip="P1" />
            <div className="row__seat tooltip" data-tooltip="P2" />
            <div className="row__seat tooltip" data-tooltip="P3" />
            <div className="row__seat tooltip" data-tooltip="P4" />
            <div className="row__seat tooltip" data-tooltip="P5" />
            <div className="row__seat tooltip" data-tooltip="P6" />
            <div className="row__seat tooltip" data-tooltip="P7" />
            <div className="row__seat tooltip" data-tooltip="P8" />
            <div className="row__seat tooltip" data-tooltip="P9" />
            <div className="row__seat tooltip" data-tooltip="P10" />
            <div className="row__seat tooltip" data-tooltip="P11" />
            <div className="row__seat tooltip" data-tooltip="P12" />
            <div className="row__seat tooltip" data-tooltip="P13" />
            <div className="row__seat tooltip" data-tooltip="P14" />
            <div className="row__seat tooltip" data-tooltip="P15" />
            <div className="row__seat tooltip" data-tooltip="P16" />
            <div className="row__seat tooltip" data-tooltip="P17" />
            <div className="row__seat tooltip" data-tooltip="P18" />
          </div>
          <div className="row">
            <div className="row__seat tooltip" data-tooltip="Q1" />
            <div className="row__seat tooltip" data-tooltip="Q2" />
            <div className="row__seat tooltip" data-tooltip="Q3" />
            <div className="row__seat tooltip" data-tooltip="Q4" />
            <div className="row__seat tooltip" data-tooltip="Q5" />
            <div className="row__seat tooltip" data-tooltip="Q6" />
            <div className="row__seat tooltip" data-tooltip="Q7" />
            <div className="row__seat tooltip" data-tooltip="Q8" />
            <div className="row__seat tooltip" data-tooltip="Q9" />
            <div className="row__seat tooltip" data-tooltip="Q10" />
            <div className="row__seat tooltip" data-tooltip="Q11" />
            <div className="row__seat tooltip" data-tooltip="Q12" />
            <div className="row__seat tooltip" data-tooltip="Q13" />
            <div className="row__seat tooltip" data-tooltip="Q14" />
            <div className="row__seat tooltip" data-tooltip="Q15" />
            <div className="row__seat tooltip" data-tooltip="Q16" />
            <div className="row__seat tooltip" data-tooltip="Q17" />
            <div className="row__seat tooltip" data-tooltip="Q18" />
          </div>
          <div className="row">
            <div className="row__seat tooltip" data-tooltip="R1" />
            <div className="row__seat tooltip" data-tooltip="R2" />
            <div className="row__seat tooltip" data-tooltip="R3" />
            <div className="row__seat tooltip" data-tooltip="R4" />
            <div className="row__seat tooltip" data-tooltip="R5" />
            <div className="row__seat tooltip" data-tooltip="R6" />
            <div className="row__seat tooltip" data-tooltip="R7" />
            <div className="row__seat tooltip" data-tooltip="R8" />
            <div className="row__seat tooltip" data-tooltip="R9" />
            <div className="row__seat tooltip" data-tooltip="R10" />
            <div className="row__seat tooltip" data-tooltip="R11" />
            <div className="row__seat tooltip" data-tooltip="R12" />
            <div className="row__seat tooltip" data-tooltip="R13" />
            <div className="row__seat tooltip" data-tooltip="R14" />
            <div className="row__seat tooltip" data-tooltip="R15" />
            <div className="row__seat tooltip" data-tooltip="R16" />
            <div className="row__seat tooltip" data-tooltip="R17" />
            <div className="row__seat tooltip" data-tooltip="R18" />
          </div>
        </div>
        <ul className="legend">
          <li className="legend__item legend__item--free">Free</li>
          <li className="legend__item legend__item--reserved">Reserved</li>
          <li className="legend__item legend__item--selected">Selected</li>
        </ul>
        <button className="action action--buy">Buy tickets</button>
      </div>
      <button className="action action--lookaround action--disabled" arial-label="Unlook View" />
    </div>

  );
}
