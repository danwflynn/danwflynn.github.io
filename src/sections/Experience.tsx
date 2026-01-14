import Section from '../components/Section'

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="timeline">

        <div className="timeline-item">
          <div className="timeline-logo">
            <img src="/logos/nklabs-logo.png" alt="NK Labs logo" />
          </div>

          <div className="timeline-content">
            <h3>NK Labs</h3>
            <span className="timeline-date">
              Embedded Software Engineering Co-op • Jan 2025 - Jun 2025
            </span>
            <ul>
              <li>
                Developed front-end, back-end, and firmware of a PCR machine using an STM32 microcontroller.
              </li>
              <li>
                Managed Linux daemons on SoC; used UART for debugging and U-Boot DFU for firmware loading.
              </li>
              <li>
                Implemented experiment timers, temperature ramping compensation, socket-based web connectivity, and UI logic.
              </li>
            </ul>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-logo">
            <img src="/logos/schneider-electric-logo.png" alt="Schneider Electric logo" />
          </div>

          <div className="timeline-content">
            <h3>Schneider Electric</h3>
            <span className="timeline-date">
              Software Engineering Co-op • Jan 2024 - Jun 2024
            </span>
            <ul>
              <li>
                Developed edge computing middleware using Docker and Kubernetes for distributed industrial devices.
              </li>
              <li>
                Implemented OPC UA communication for industrial automation and reliable data exchange.
              </li>
              <li>
                Contributed to DevOps workflows, IP configuration, container orchestration, and WebAssembly integration.
              </li>
            </ul>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-logo">
            <img src="/logos/depuy-logo.png" alt="Depuy Synthes logo" />
          </div>

          <div className="timeline-content">
            <h3>Depuy Synthes Mitek Sports Medicine</h3>
            <span className="timeline-date">
              Software Engineering Co-op • Jan 2023 - Jun 2023
            </span>
            <ul>
              <li>
                Developed software and firmware for the FMS VUE fluid management pump.
              </li>
              <li>
                Used Arm Keil and JTAG debugging for firmware development and release builds.
              </li>
              <li>
                Implemented auto-calibration for pressure compensation based on elevation with lab testing.
              </li>
            </ul>
          </div>
        </div>

      </div>
    </Section>
  )
}
