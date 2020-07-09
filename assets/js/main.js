document.addEventListener("DOMContentLoaded", getParticles());

function getParticles() {
    particlesJS("js-particles",
        {
            particles:
            {
                number:
                {
                    value: 120, density:
                    {
                        enable: !0, value_area: 600
                    }
                }, color:
                {
                    value: "#ffffff"
                }, shape:
                {
                    type: "circle", stroke:
                    {
                        width: 0, color: "#ffffff"
                    }
                }, opacity:
                {
                    value: 1, random: !0, anim:
                    {
                        enable: !0, speed: 1, opacity_min: 0, sync: !1
                    }
                }, size:
                {
                    value: 3, random: !0
                }, line_linked:
                {
                    enable: !1
                }, move:
                {
                    enable: !0, speed: 1, direction: "none", random: !0, straight: !1, out_mode: "out", bounce: !1, attract:
                    {
                        enable: !1, rotateX: 360, rotateY: 360
                    }                }
            }, interactivity:
            {
                detect_on: "canvas", events:
                {
                    onhover:
                    {
                        enable: !1, mode: "bubble"
                    }, onclick:
                    {
                        enable: !1, mode: "repulse"
                    }, resize: !0
                }, modes:
                {
                    bubble:
                    {
                        distance: 250, size: 0, duration: 2, opacity: 0, speed: 3
                    }
                }
            }, retina_detect: !0
        }
    )
}
