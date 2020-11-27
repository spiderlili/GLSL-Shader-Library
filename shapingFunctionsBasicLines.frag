#ifdef GL_ES
precision mediump float;
#endif

#define PI 3.141592

uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float u_time;

float lineThickness = 0.02;

//plot a linear line on Y using a value between 0.0 - 1.0
//use one to one linear interpolation relationship between between x & y to shape the line
float plotLinearLineY(vec2 st)
{
    return smoothstep(lineThickness, 0.0, abs(st.y - st.x));
}

float plotCurveLineY(vec2 st, float pct)
{
    return smoothstep(pct - lineThickness, pct, st.y) - smoothstep(pct, pct + lineThickness, st.y);
}

void main() {
    vec2 st = gl_FragCoord.xy/u_resolution.xy;
    float powerToX = 5.0;
    float yPos = pow(st.x, powerToX);

    //vec3 backgroundColor = vec3(st.x);
    vec3 backgroundColor = vec3(yPos);
    vec3 lineColorRed = vec3(1.0,0.0,0.0); 
    vec3 lineColorGreen = vec3(0.0,1.0,0.0);
    
    //plot a linear line on Y
    float plotLine = plotLinearLineY(st);
    backgroundColor = (1.0 - plotLine) * backgroundColor + plotLine * lineColorGreen;

    //plot a curve along Y, raise x to the power of 5.0 (powerToX) to make a curved line
    float pct = plotCurveLineY(st, yPos);
    backgroundColor = (1.0 - pct) * backgroundColor + pct * lineColorRed;
    
    gl_FragColor = vec4(backgroundColor,1.0);
}