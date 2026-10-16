/* ============================================================
   Tessal Portfolio — Subtractive Studio Scripts
   Architecture: Kenya Hara "White" / Pentagram Minimal Restraint
   Features:
   - EN/VI language dictionary & persistence
   - Minimalist telemetry harmonic scope canvas
   - Live DSP-PPG photoplethysmography waveform canvas & filter toggle
   - Live ESP32-S3 ECG continuous waveform canvas & rhythm toggle
   - Deep-dive technical specification modal drawer (7 verified projects)
   - Scroll progress indicator & keyboard accessibility
   ============================================================ */

(function() {
    'use strict';

    /* ── 1. Bilingual Translation Dictionary (EN / VI) ── */
    const I18N = {
        en: {
            'title.site': 'Tessal — Electrical & Computer Engineer',
            'meta.desc': 'Portfolio of Tessal, an Electrical & Computer Engineer crafting systems at the boundary of physical reality and digital silicon.',
            'skip': 'Skip to main content',
            'nav.works': 'Works',
            'nav.discipline': 'Discipline',
            'nav.inquiry': 'Inquiry',
            'nav.meta': 'ECE LAB · 2026',
            'hero.tag': 'Electrical & Computer Engineer',
            'hero.title': 'Crafting systems at the boundary of physical reality and digital silicon.',
            'hero.lead': 'Robotics kinematics, embedded firmware architectures, real-time biosignal telemetry, and low-latency wireless peripherals designed with quiet restraint and mathematical clarity.',
            'hero.works': 'Selected Engineering Works ↓',
            'hero.github': 'GitHub Archive ↗',
            'hero.status': '07 Repositories Verified Live',
            'telemetry.left': '6-AXIS ROBOTICS · 12-CH I/O',
            'telemetry.center': 'ECG / PPG BIOSIGNALS · TINYML',
            'telemetry.right': 'ESP32-S3 · STM32 · KOTLIN BLE',
            'sec.works': 'Selected Works',
            'sec.discipline': 'Discipline & Philosophy',
            'sec.inquiry': 'Begin a conversation.',
            'inquiry.lead': 'Have a complex embedded system to bring up, robotics to calibrate, biosignal telemetry to analyze, or an engineering role to discuss? I welcome thoughtful inquiries.',
            'p.arm.fig': 'FIG. 01 — KINEMATICS & TRAJECTORY',
            'p.arm.title': 'NEMA 6-Axis Robotic Arm',
            'p.arm.tags': 'C++17 · ESP32-S3 · FreeRTOS · Modified DH',
            'p.arm.desc': 'An ESP32-S3 drawing-arm controller pairing 6 AS5600 magnetic encoders with a 50 kHz fixed-point step engine, calibrated work planes, and closed-form kinematics.',
            'p.ai.fig': 'FIG. 02 — WAND GESTURE LEARNING',
            'p.ai.title': 'STEM AI Platform',
            'p.ai.tags': 'PyQt6 · ESP32 · MPU6050 · TensorFlow Lite',
            'p.ai.desc': 'A desktop learning environment where a physical ESP32 wand streams 6-axis IMU data at 50 Hz for few-shot gesture recognition, classic ML experiments, and one-click C99 deployment.',
            'p.dsp.fig': 'FIG. 03 — BIOMEDICAL SIGNAL PROCESSING',
            'p.dsp.title': 'DSP-PPG Analyzer',
            'p.dsp.tags': 'Python · PyQt6 · scipy.signal',
            'p.dsp.desc': 'A PyQt6 desktop analyzer for Excel PPG captures. It validates motion artifacts, processes IR and red channels with configurable IIR/FIR filters, and reports five physiological metrics.',
            'p.ecg.fig': 'FIG. 04 — BIOSIGNAL & TOUCH COMPANION',
            'p.ecg.title': 'ESP32-S3 ECG Monitor & Companion',
            'p.ecg.tags': 'C · ESP32-S3 · ILI9488 · FreeRTOS',
            'p.ecg.desc': 'An ESP32-S3 touchscreen telemetry platform pairing a 480×320 ILI9488 display with real-time continuous ECG waveform plotting, statistical biosignal metrics, and an interactive state-driven companion mascot.',
            'p.hex.fig': 'FIG. 05 — SERIAL I/O CONTROL',
            'p.hex.title': 'STM32 12-Channel I/O Monitor',
            'p.hex.tags': 'PyQt5 · PySerial · STM32 · USART1',
            'p.hex.desc': 'A PyQt5 UART workbench for twelve STM32 outputs and twelve live inputs, with serial traffic inspection, byte-level commands, counters, and a built-in virtual hardware simulator.',
            'p.line.fig': 'FIG. 06 — HARD REAL-TIME EMBEDDED CONTROL',
            'p.line.title': 'High-Speed ESP32 Benchmark Line Follower',
            'p.line.tags': 'C++ · ESP32 · DRV8871 · CD74HC4067 · Fast I2C',
            'p.line.desc': 'A high-speed autonomous ground vehicle engineered for zero-latency path tracking. Features an 8-channel optical sensor array through a high-speed analog MUX, dual DRV8871 20 kHz PWM drivers, quadrature encoder feedback, and a deterministic PID loop.',
            'p.led.fig': 'FIG. 07 — WIRELESS PERIPHERAL & APP INTEGRATION',
            'p.led.title': '360° LED Matrix & Android BLE Controller',
            'p.led.tags': 'Kotlin · Android · ESP32 · Nordic UART BLE',
            'p.led.desc': 'A 360° smart LED matrix lamp and Android control ecosystem. Communicates over Nordic UART Service (NUS) BLE with sub-50ms latency, streaming real-time 6-axis IMU orientation, battery telemetry, 10+ dynamic visual shaders, and background notification triggers.',
            'action.repo': 'Repository ↗',
            'action.spec': 'Inspect Spec',
            'studio.heading': 'Reduction to the structural essence.',
            'studio.p1': 'I am Tessal, an Electrical and Computer Engineer. I believe the highest form of engineering craftsmanship is subtractive: removing noise, unnecessary abstractions, and brittle complexity until only the pure, functioning system remains.',
            'studio.p2': 'From derivation of closed-form Jacobian equations to bare-metal register configuration, I approach systems engineering with patience, precision, and reverence for fundamental principles.',
            'skill.hw': 'Silicon & Hardware',
            'skill.sw': 'Firmware & Software',
            'dsp.filtered': '[IIR Butterworth]',
            'dsp.raw': '[FIR Hamming]',
            'ecg.sinus': '[Sinus Rhythm · 72 BPM]',
            'ecg.active': '[Companion Active · 88 BPM]',
            'lang.toggle': 'VI',
            'lang.aria': 'Switch language to Vietnamese',
            'footer.copy': '© 2026 Tessal (Lê Hoàng Phúc Anh). Subtractive Studio Production.',
            'footer.creed': 'Kenya Hara "White" / Pentagram Architectural Restraint'
        },
        vi: {
            'title.site': 'Tessal — Kỹ sư Điện & Máy tính',
            'meta.desc': 'Portfolio của Tessal, Kỹ sư Điện & Máy tính chế tạo hệ thống ở ranh giới giữa thực tại vật lý và silicon số.',
            'skip': 'Bỏ qua tới nội dung chính',
            'nav.works': 'Dự án',
            'nav.discipline': 'Triết lý & Kỹ năng',
            'nav.inquiry': 'Liên hệ',
            'nav.meta': 'PHÒNG THÍ NGHIỆM ECE · 2026',
            'hero.tag': 'Kỹ sư Điện & Máy tính',
            'hero.title': 'Chế tạo hệ thống ở ranh giới giữa thực tại vật lý và silicon số.',
            'hero.lead': 'Động học robot, kiến trúc firmware nhúng, đo từ xa tín hiệu y sinh thời gian thực và thiết bị ngoại vi không dây độ trễ thấp, thiết kế với sự tinh giản và kỷ luật toán học.',
            'hero.works': 'Xem các dự án tiêu biểu ↓',
            'hero.github': 'Kho lưu trữ GitHub ↗',
            'hero.status': '07 kho mã nguồn đã xác minh',
            'telemetry.left': 'ROBOT 6 TRỤC · I/O 12 KÊNH',
            'telemetry.center': 'TÍN HIỆU ECG / PPG · TINYML',
            'telemetry.right': 'ESP32-S3 · STM32 · KOTLIN BLE',
            'sec.works': 'Dự án tiêu biểu',
            'sec.discipline': 'Kỷ luật & Triết lý',
            'sec.inquiry': 'Bắt đầu cuộc trò chuyện.',
            'inquiry.lead': 'Bạn có hệ thống nhúng phức tạp cần triển khai, robot cần hiệu chuẩn, dữ liệu y sinh cần đo đạc, hay vị trí kỹ thuật muốn trao đổi? Tôi luôn chào đón những kết nối chân thành.',
            'p.arm.fig': 'HÌNH 01 — ĐỘNG HỌC & QUỸ ĐẠO CÁNH TAY',
            'p.arm.title': 'Cánh tay robot NEMA 6 trục',
            'p.arm.tags': 'C++17 · ESP32-S3 · FreeRTOS · Modified DH',
            'p.arm.desc': 'Bộ điều khiển cánh tay vẽ dùng ESP32-S3, 6 encoder từ AS5600, động cơ bước fixed-point 50 kHz, mặt phẳng làm việc hiệu chuẩn và động học dạng đóng.',
            'p.ai.fig': 'HÌNH 02 — HỌC CỬ CHỈ ĐŨA PHÉP',
            'p.ai.title': 'Nền tảng STEM AI',
            'p.ai.tags': 'PyQt6 · ESP32 · MPU6050 · TensorFlow Lite',
            'p.ai.desc': 'Môi trường học tập trên desktop: đũa ESP32 gửi dữ liệu IMU 6 trục ở 50 Hz để nhận diện cử chỉ few-shot, thí nghiệm ML cổ điển và nạp C99 một chạm.',
            'p.dsp.fig': 'HÌNH 03 — XỬ LÝ TÍN HIỆU Y SINH',
            'p.dsp.title': 'Bộ phân tích DSP-PPG',
            'p.dsp.tags': 'Python · PyQt6 · scipy.signal',
            'p.dsp.desc': 'Bộ phân tích PyQt6 cho dữ liệu PPG Excel. Ứng dụng kiểm tra nhiễu chuyển động, xử lý kênh IR và đỏ bằng bộ lọc IIR/FIR tùy chỉnh, rồi xuất năm chỉ số sinh lý.',
            'p.ecg.fig': 'HÌNH 04 — ĐO SINH HỌC & BẠN ĐỒNG HÀNH',
            'p.ecg.title': 'Máy đo ECG & Bạn đồng hành ESP32-S3',
            'p.ecg.tags': 'C · ESP32-S3 · ILI9488 · FreeRTOS',
            'p.ecg.desc': 'Nền tảng đo từ xa màn hình cảm ứng ESP32-S3 kết hợp màn hình ILI9488 480×320 với hiển thị dạng sóng ECG thời gian thực, đo đạc chỉ số sinh học và linh vật tương tác đa trạng thái.',
            'p.hex.fig': 'HÌNH 05 — ĐIỀU KHIỂN I/O NỐI TIẾP',
            'p.hex.title': 'Màn hình I/O STM32 12 kênh',
            'p.hex.tags': 'PyQt5 · PySerial · STM32 · USART1',
            'p.hex.desc': 'Workbench UART PyQt5 cho 12 ngõ ra và 12 ngõ vào STM32: kiểm tra lưu lượng serial, lệnh theo byte, bộ đếm và mô phỏng phần cứng tích hợp.',
            'p.line.fig': 'HÌNH 06 — ĐIỀU KHIỂN NHÚNG THỜI GIAN THỰC',
            'p.line.title': 'Xe dò line tốc độ cao ESP32',
            'p.line.tags': 'C++ · ESP32 · DRV8871 · CD74HC4067 · Fast I2C',
            'p.line.desc': 'Xe dò line tốc độ cao tối ưu độ trễ xử lý đường đi. Tích hợp mảng 8 cảm biến quang qua MUX analog tốc độ cao, điều khiển động cơ kép DRV8871 PWM 20 kHz, phản hồi encoder và vòng lặp PID thời gian thực.',
            'p.led.fig': 'HÌNH 07 — NGOẠI VI KHÔNG DÂY & TÍCH HỢP APP',
            'p.led.title': 'Đèn LED Matrix 360° & App Android BLE',
            'p.led.tags': 'Kotlin · Android · ESP32 · Nordic UART BLE',
            'p.led.desc': 'Hệ sinh thái đèn LED Matrix 360° và ứng dụng điều khiển Android. Kết nối qua BLE Nordic UART Service với độ trễ <50ms, truyền trực tiếp dữ liệu IMU 6 trục, pin, 10+ hiệu ứng ánh sáng và ngắt thông báo nền.',
            'action.repo': 'Xem mã nguồn ↗',
            'action.spec': 'Xem đặc tả',
            'studio.heading': 'Tinh giản về bản chất cấu trúc.',
            'studio.p1': 'Tôi là Tessal, Kỹ sư Điện và Máy tính. Tôi tin rằng đỉnh cao của chế tác kỹ thuật là phép trừ: loại bỏ tạp âm, các lớp trừu tượng dư thừa và sự phức tạp mong manh cho đến khi chỉ còn lại một hệ thống thuần khiết, vận hành chính xác.',
            'studio.p2': 'Từ việc thiết lập các phương trình Jacobian giải tích đến cấu hình thanh ghi trực tiếp trên phần cứng, tôi tiếp cận kỹ thuật hệ thống với sự kiên nhẫn, độ chuẩn xác và niềm tôn kính các nguyên lý nền tảng.',
            'skill.hw': 'Silicon & Phần cứng',
            'skill.sw': 'Firmware & Phần mềm',
            'dsp.filtered': '[IIR Butterworth]',
            'dsp.raw': '[FIR Hamming]',
            'ecg.sinus': '[Nhịp xoang chuẩn · 72 BPM]',
            'ecg.active': '[Đo từ xa linh vật · 88 BPM]',
            'lang.toggle': 'EN',
            'lang.aria': 'Chuyển ngôn ngữ sang tiếng Anh',
            'footer.copy': '© 2026 Tessal (Lê Hoàng Phúc Anh). Phiên bản Subtractive Studio.',
            'footer.creed': 'Kenya Hara "White" / Chuẩn mực kiến trúc Pentagram'
        }
    };

    let currentLang = localStorage.getItem('tessal_lang') || 'en';

    function setLanguage(lang) {
        currentLang = lang;
        localStorage.setItem('tessal_lang', lang);
        document.documentElement.lang = lang;

        const dict = I18N[lang] || I18N.en;

        // Title and meta
        if (dict['title.site']) document.title = dict['title.site'];
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc && dict['meta.desc']) metaDesc.setAttribute('content', dict['meta.desc']);

        // Update data-i18n elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key]) {
                el.textContent = dict[key];
            }
        });

        // Update lang toggle button
        const langBtn = document.getElementById('langToggle');
        if (langBtn) {
            langBtn.textContent = dict['lang.toggle'] || (lang === 'en' ? 'VI' : 'EN');
            langBtn.setAttribute('aria-label', dict['lang.aria'] || '');
        }

        // Update active DSP and ECG labels
        updateWidgetLabels();
    }

    /* ── 2. Scroll Progress Bar ── */
    function initScrollProgress() {
        const bar = document.getElementById('progressBar');
        if (!bar) return;
        window.addEventListener('scroll', () => {
            const h = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.scrollY / (h || 1)) * 100;
            bar.style.width = Math.min(100, Math.max(0, scrolled)) + '%';
        }, { passive: true });
    }

    /* ── 3. Minimalist Telemetry Harmonic Scope Canvas ── */
    let telemetryAnimId;
    let telemetryPhase = 0;

    function initTelemetryScope() {
        const canvas = document.getElementById('telemetryScope');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        function render() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.strokeStyle = '#5F4A8B'; // violet ink
            ctx.lineWidth = 1.2;
            ctx.beginPath();

            const midY = canvas.height / 2;
            const w = canvas.width;

            for (let x = 0; x < w; x++) {
                const normX = x / w;
                const y = midY + 
                    Math.sin(normX * Math.PI * 4 + telemetryPhase) * 6 + 
                    Math.cos(normX * Math.PI * 8 - telemetryPhase * 1.4) * 2.5;
                if (x === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();

            // Traveling telemetry marker point
            const probeX = ((telemetryPhase * 24) % w);
            const normProbe = probeX / w;
            const probeY = midY + 
                Math.sin(normProbe * Math.PI * 4 + telemetryPhase) * 6 + 
                Math.cos(normProbe * Math.PI * 8 - telemetryPhase * 1.4) * 2.5;
            ctx.fillStyle = '#C84B31';
            ctx.beginPath();
            ctx.arc(probeX, probeY, 2.2, 0, Math.PI * 2);
            ctx.fill();

            if (!isReduced) {
                telemetryPhase += 0.025;
                telemetryAnimId = requestAnimationFrame(render);
            }
        }

        render();

        document.addEventListener('visibilitychange', () => {
            if (document.hidden) cancelAnimationFrame(telemetryAnimId);
            else if (!isReduced) telemetryAnimId = requestAnimationFrame(render);
        });
    }

    /* ── 4. DSP Filter Topology Preview (PPG) ── */
    let subPpgFiltered = true;
    let subPpgTime = 0;
    let ppgAnimId;

    function initDspPpg() {
        const canvas = document.getElementById('subPpgCanvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        function draw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.strokeStyle = subPpgFiltered ? '#C84B31' : '#6B6761';
            ctx.lineWidth = 1.3;
            ctx.beginPath();

            const centerY = canvas.height / 2;
            const w = canvas.width;

            for (let x = 0; x < w; x++) {
                const phase = (x * 0.05 - subPpgTime) % (Math.PI * 2);
                let pulse = Math.sin(phase) * 11 + Math.sin(phase * 2) * 4.5;
                if (!subPpgFiltered) pulse = Math.sin(phase) * 8 + Math.sin(phase * 3) * 3;
                const y = centerY - pulse;
                if (x === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();

            if (!isReduced) {
                subPpgTime += 0.04;
                ppgAnimId = requestAnimationFrame(draw);
            }
        }

        draw();

        document.addEventListener('visibilitychange', () => {
            if (document.hidden) cancelAnimationFrame(ppgAnimId);
            else if (!isReduced) ppgAnimId = requestAnimationFrame(draw);
        });
    }

    function toggleSubDsp() {
        subPpgFiltered = !subPpgFiltered;
        updateWidgetLabels();
    }

    /* ── 5. Live ECG Continuous Biosignal & Telemetry Scope ── */
    let subEcgAlert = false;
    let subEcgTime = 0;
    let ecgAnimId;

    // ECG wave generator: standard P-Q-R-S-T morphology
    function getEcgY(t, isAlert) {
        const p = t % 1.0;
        let v = 0;
        if (p < 0.15) {
            v = 0;
        } else if (p < 0.25) {
            const phi = ((p - 0.15) / 0.10) * Math.PI;
            v = Math.sin(phi) * 0.18;
        } else if (p < 0.30) {
            v = 0;
        } else if (p < 0.33) {
            const phi = ((p - 0.30) / 0.03) * Math.PI;
            v = -Math.sin(phi) * 0.15;
        } else if (p < 0.38) {
            const phi = ((p - 0.33) / 0.05) * Math.PI;
            v = Math.sin(phi) * 1.0;
        } else if (p < 0.42) {
            const phi = ((p - 0.38) / 0.04) * Math.PI;
            v = -Math.sin(phi) * 0.30;
        } else if (p < 0.50) {
            v = 0;
        } else if (p < 0.65) {
            const phi = ((p - 0.50) / 0.15) * Math.PI;
            v = Math.sin(phi) * 0.32;
        } else {
            v = 0;
        }

        if (isAlert) {
            v += (Math.random() - 0.5) * 0.05;
        }
        return v;
    }

    function initEcgMonitor() {
        const canvas = document.getElementById('subEcgCanvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        const isReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        function drawEcg() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.strokeStyle = subEcgAlert ? '#5F4A8B' : '#C84B31';
            ctx.lineWidth = 1.3;
            ctx.beginPath();

            const midY = canvas.height * 0.62;
            const w = canvas.width;
            const amp = canvas.height * 0.48;

            for (let x = 0; x < w; x++) {
                const t = (x * 0.0075 + subEcgTime);
                const y = midY - getEcgY(t, subEcgAlert) * amp;
                if (x === 0) ctx.moveTo(x, y);
                else ctx.lineTo(x, y);
            }
            ctx.stroke();

            if (!isReduced) {
                subEcgTime += subEcgAlert ? 0.016 : 0.012;
                ecgAnimId = requestAnimationFrame(drawEcg);
            }
        }

        drawEcg();

        document.addEventListener('visibilitychange', () => {
            if (document.hidden) cancelAnimationFrame(ecgAnimId);
            else if (!isReduced) ecgAnimId = requestAnimationFrame(drawEcg);
        });
    }

    function toggleSubEcg() {
        subEcgAlert = !subEcgAlert;
        updateWidgetLabels();
    }

    function updateWidgetLabels() {
        const dict = I18N[currentLang] || I18N.en;
        const dspBtn = document.getElementById('subDspBtn');
        if (dspBtn) {
            dspBtn.textContent = subPpgFiltered ? dict['dsp.filtered'] : dict['dsp.raw'];
        }
        const ecgBtn = document.getElementById('subEcgBtn');
        if (ecgBtn) {
            ecgBtn.textContent = subEcgAlert ? dict['ecg.active'] : dict['ecg.sinus'];
        }
    }

    /* ── 6. Engineering Specifications Modal Drawer ── */
    const subSpecs = {
        arm: {
            title: "NEMA 6-Axis Robotic Arm",
            sub: "C++17 · ESP32-S3 · FreeRTOS · Modified DH",
            desc: "An ESP32-S3 arm controller that joins real-time sensor feedback, deterministic step generation, and work-plane drawing rather than presenting a generic robot concept.",
            bom: [
                ["Sensors", "6× AS5600 12-bit magnetic encoders via PCA9548A I²C mux"],
                ["Control", "Core 0 sensor task at 200 Hz; Core 1 motion task at 100 Hz"],
                ["Step engine", "50 kHz hardware timer with Q32.32 fixed-point DDA"],
                ["Kinematics", "Craig Modified DH with analytical IK and 3-point work-plane calibration"],
                ["Safety", "Online joint-error E-stop plus post-stop settlement validation"]
            ]
        },
        ai: {
            title: "STEM AI Platform",
            sub: "PyQt6 · ESP32 · MPU6050 · TensorFlow Lite",
            desc: "A physical-wand learning environment that makes the ML lifecycle inspectable: collect motion, train, diagnose, export, and flash a model to an ESP32.",
            bom: [
                ["Input", "ESP32 + MPU6050 streams 6-axis IMU frames over UART / UDP at 50 Hz"],
                ["Recording", "Gesture CSV windows: 64 samples × 6 axes"],
                ["Few-shot path", "TensorFlow / TensorFlow Lite prototypical encoder"],
                ["ML Lab", "15 classic algorithms, diagnostics, augmentation, and model cards"],
                ["Deployment", "C99 generation and one-click ESP32 flashing via esptool"]
            ]
        },
        dsp: {
            title: "DSP-PPG Analyzer",
            sub: "Python · PyQt6 · scipy.signal",
            desc: "A desktop PPG analysis tool for Excel captures with explicit artifact checks, configurable filter design, and quality-aware physiological metrics.",
            bom: [
                ["Input", "Excel columns for time, IR / infrared, and red / red_channel"],
                ["Quality", "Motion-artifact detection precedes analysis"],
                ["Filters", "Butterworth IIR high/low/bandpass and Hamming-window FIR lowpass"],
                ["Metrics", "HR, SpO2, RR, HRV, and perfusion index"],
                ["Distribution", "Source run or downloadable Windows release executable"]
            ]
        },
        ecg: {
            title: "ESP32-S3 ECG Monitor & Companion",
            sub: "C · ESP32-S3 · ILI9488 · FreeRTOS",
            desc: "A touchscreen telemetry companion that plots continuous real-time biosignals without frame drops or display flickering, combining biomedical monitoring with an interactive state-driven desktop mascot.",
            bom: [
                ["Display", "3.5\" 480×320 ILI9488 SPI/parallel LCD with resistive/capacitive touch"],
                ["Controller", "ESP32-S3 dual-core LX7 @ 240 MHz with custom double-buffering engine"],
                ["Analog Front-End", "Lead-II bio-potential amplifier with 0.05–150 Hz hardware filter"],
                ["Telemetry", "Continuous min/max/average stats, heart rate BPM, and interval extraction"],
                ["Companion", "Finite state machine mascot with 7 emotional GIF states and speech bubbles"]
            ]
        },
        hex: {
            title: "STM32 12-Channel I/O Monitor",
            sub: "PyQt5 · PySerial · STM32 · USART1",
            desc: "A desktop UART control and monitoring surface with byte-level protocol visibility and a simulator that makes the application testable before physical hardware is connected.",
            bom: [
                ["Transport", "USART1 at 115200 baud, 8N1; PA9 TX and PA10 RX"],
                ["Outputs", "12 GPIOB channels with individual and bulk controls"],
                ["Inputs", "12 GPIOA channels with live HIGH / LOW state and event counters"],
                ["Protocol", "One command byte: bit 7 state, bits 0..6 channel number"],
                ["Test mode", "Built-in virtual STM32 simulator and color-coded serial monitor"]
            ]
        },
        line: {
            title: "High-Speed ESP32 Benchmark Line Follower",
            sub: "C++ · ESP32 · FreeRTOS · DRV8871 · CD74HC4067",
            desc: "A competition-grade line tracking robot designed for minimum cycle latency. Runs a deterministic 1 kHz control loop with hard real-time PID steering and zero network overhead.",
            bom: [
                ["Optical Array", "8-channel IR sensor bar with high-speed analog sampling"],
                ["Multiplexer", "CD74HC4067 16-to-1 analog MUX routed to ESP32 ADC1_CH0"],
                ["Motor Drive", "Dual TI DRV8871 H-Bridges with 20 kHz LEDC PWM chopping"],
                ["Sensors", "Dual quadrature magnetic/optical encoders with external interrupt decoding"],
                ["Interface", "SSD1306/SH1106 OLED at 400 kHz Fast I²C and dual tactical tactile switches"]
            ]
        },
        led: {
            title: "360° LED Matrix & Android BLE Controller",
            sub: "Kotlin · Android · ESP32 · Nordic UART BLE",
            desc: "An IoT desktop smart lighting peripheral and native Android companion app. Uses Nordic UART Service over BLE to achieve responsive <50ms command latency with two-way IMU telemetry.",
            bom: [
                ["Display Hardware", "360° cylindrical / 4-panel addressable RGB LED matrix array"],
                ["MCU Firmware", "ESP32 dual-core with FreeRTOS, FastLED / NeoPixel driver, and BLE stack"],
                ["Wireless Protocol", "Nordic UART Service (NUS) with custom compact binary payload"],
                ["Sensors & Power", "6-axis MPU IMU (pitch/roll tilt angle), battery ADC, and RAM monitor"],
                ["Mobile App", "Android Kotlin app with BleForegroundService, background notification listener, and BLE OTA"]
            ]
        }
    };

    function showSubSpec(id) {
        const data = subSpecs[id];
        if (!data) return;
        const target = document.getElementById('subModalContent');
        const overlay = document.getElementById('subModalOverlay');
        if (!target || !overlay) return;

        let tableRows = '';
        data.bom.forEach(row => {
            tableRows += `
                <tr>
                    <td>${escapeHtml(row[0])}</td>
                    <td>${escapeHtml(row[1])}</td>
                </tr>
            `;
        });

        target.innerHTML = `
            <div class="modal-spec-tag">SPECIFICATION // ${escapeHtml(id.toUpperCase())}</div>
            <h3 class="modal-spec-title">${escapeHtml(data.title)}</h3>
            <div class="modal-spec-sub">${escapeHtml(data.sub)}</div>
            <p class="modal-spec-desc">${escapeHtml(data.desc)}</p>
            <table class="modal-spec-table">
                <tbody>
                    ${tableRows}
                </tbody>
            </table>
            <button type="button" class="link-text" onclick="window.tessalCloseModal()">Close Specification</button>
        `;

        overlay.classList.add('active');
        overlay.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';

        const closeBtn = overlay.querySelector('.clean-modal-close');
        if (closeBtn) closeBtn.focus();
    }

    function closeSubSpec(e) {
        if (e && e.target !== e.currentTarget && !e.target.classList.contains('clean-modal-close') && !e.target.classList.contains('link-text')) {
            return;
        }
        const overlay = document.getElementById('subModalOverlay');
        if (!overlay) return;
        overlay.classList.remove('active');
        overlay.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    function escapeHtml(str) {
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    // Keyboard ESC listener
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const overlay = document.getElementById('subModalOverlay');
            if (overlay && overlay.classList.contains('active')) {
                closeSubSpec();
            }
        }
    });

    /* ── 7. Global Handlers & Exports ── */
    window.showSubSpec = showSubSpec;
    window.closeSubSpec = closeSubSpec;
    window.tessalCloseModal = () => closeSubSpec();
    window.toggleSubDsp = toggleSubDsp;
    window.toggleSubEcg = toggleSubEcg;

    /* ── 8. Initialization on DOMContentLoaded ── */
    document.addEventListener('DOMContentLoaded', () => {
        // Init i18n
        setLanguage(currentLang);

        const langBtn = document.getElementById('langToggle');
        if (langBtn) {
            langBtn.addEventListener('click', () => {
                const nextLang = currentLang === 'en' ? 'vi' : 'en';
                setLanguage(nextLang);
            });
        }

        // Init scopes & widgets
        initScrollProgress();
        initTelemetryScope();
        initDspPpg();
        initEcgMonitor();

        // Smooth scroll for in-page anchors
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#' || href === '') return;
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });
    });

})();
