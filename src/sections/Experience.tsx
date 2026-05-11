import Section from '../components/Section'

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="timeline">

        <div className="timeline-item">
          <div className="timeline-logo">
            <img src="/logos/digitize-logo.png" alt="Digitize logo" />
          </div>

          <div className="timeline-content">
            <h3>Digitize</h3>
            <span className="timeline-date">
              Embedded Software Engineer • April 2026 - Present
            </span>
            <ul>
              <li>
                Implemented firmware to control hardware peripherals for RTU microcontrollers in C and assembly for 8051 architecture.
              </li>
              <li>
                Wrote custom bit-banged I2C, SPI, and UART drivers for inter-device communication and tested with Saleae logic analyzer.
              </li>
              <li>
                Created an integrated circuit for an RTU with an STC89 MCU, WIZnet W5500 ethernet controller, PCF8574 I/O extender, and AHT21 temperature sensor enabling temperature measurements, TCP/UDP communication, and a serial interface.
              </li>
              <li>
                Soldered components for a PCB integrating the integrated circuit and an 8 relay module for turning switches on and off.
              </li>
              <li>
                Developed a Python Qt GUI for controlling the RTU circuit and gathering data via TCP and UDP socket communication.
              </li>
              <li>
                Leveraged OpenSCAD 3d modeling software and Prusa Slicer to 3d print casing and PCB standoffs for RTU circuit board.
              </li>
            </ul>
          </div>
        </div>

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
                Developed software and firmware for a PCR machine using an STM32 microcontroller integrated with a TI AM62 SoC.
              </li>
              <li>
                Wrote C++ front-end code with Qt for menus, buttons, experiment graphs/files, and back-end communication over sockets.
              </li>
              <li>
                Implemented experiment timers, estimated time calculation, temperature ramping, and event handling on Python back-end.
              </li>
              <li>
                Created JavaScript web app to control the PCR machine with socket events by connecting to the device’s IP in a browser.
              </li>
              <li>
                Built a custom Linux image with Buildroot, integrating front-end and back-end daemons for the PCR machine.
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
                Wrote C++ code handling server/client communication between edge devices using OPC UA and MQTT protocols.
              </li>
              <li>
                Deployed edge computing middleware for industrial automation, orchestrating services with Docker and Kubernetes.
              </li>
              <li>
                Cross-compiled edge computing middleware for multiple CPU architectures and integrated WebAssembly modules.
              </li>
              <li>
                Contributed to DevOps processes, CI/CD pipeline, and network management using GitHub Actions and Ansible.
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
                Developed software and firmware for the FMS VUE saline and fluid management pump, utilizing a monochrome dot-matrix LCD for the front-end, and IBM Rhapsody for UML design, code organization, simulation, and validation on the back-end.
              </li>
              <li>
                Wrote C code for FMS VUE firmware and Python code to parse information from SystemD logs using journalctl.
              </li>
              <li>
                Used Arm Keil compiler and JTAG debugger to program flash memory, debug firmware code, and create release versions.
              </li>
              <li>
                Implemented auto calibration mode for FMS VUE pressure compensation based on elevation with laboratory testing.
              </li>
            </ul>
          </div>
        </div>

      </div>
    </Section>
  )
}
