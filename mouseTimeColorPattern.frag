#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time; //time in seconds since load
uniform vec2 u_resolution; //canvas size (width, height)
uniform vec2 u_mouse; //mouse position in screen pixels

//Q: Can you tell where the coordinate (0.0, 0.0) is in our canvas?
//A: bottom-left corner is (0,0) in OpenGL.

//Q: What about (1.0, 0.0), (0.0, 1.0), (0.5, 0.5) and (1.0, 1.0)?
//A: (1.0, 0.0) is bottom-right, (0.0, 1.0) is top-left, (0.5, 0.5) is in the middle of screen, (1.0, 1.0) is top-right.

//use u_mouse to move colors around, knowing that the values are in pixels and NOT normalized values
vec4 moouseMoveColor()
{
    vec2 normalizedMousePos = gl_FragCoord.xy / u_mouse;
    return vec4(normalizedMousePos,0.0,1.0);
}

//interesting way of changing color pattern using u_time and u_mouse coordinates
vec4 mouseTimePattern()
{
    vec2 normalizedMousePos = gl_FragCoord.xy / u_mouse;
    return vec4(normalizedMousePos,abs(sin(u_time)),1.0);
}

void main() 
{
	//gl_FragCoord holds the screen coordinates of the pixel that the active thread is working on
    //normalize pixel coordinate by dividing it by total resolution of billboard => easier to map to R & G
    vec2 st = gl_FragCoord.xy/u_resolution;
    //gl_FragColor = vec4(st.x,st.y,0.0,1.0);
    //gl_FragColor = moouseMoveColor();
    gl_FragColor = mouseTimePattern();
}


