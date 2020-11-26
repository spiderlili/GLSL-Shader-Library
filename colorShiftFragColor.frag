#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time; //time in seconds since load

//Slow down the frequency until the color change becomes almost imperceptible.
vec4 slowColorChange()
{ 
    return vec4(abs(sin(u_time * 0.2)),0.0,0.0,1.0);   
}

//speed up the frequency until you see a single color without flickering
vec4 fastColorChange()
{
	return vec4(abs(sin(u_time) * exp(100.0)),0.0,0.0,1.0);   
}

//play with RGB in different frequencies to get interesting behaviours
vec4 RGBblend()
{
	return vec4(abs(sin(u_time)), abs(cos(u_time)), abs(tan(u_time)), 1.0);    
}

void main() 
{
    //gl_FragColor = slowColorChange();
	//gl_FragColor = fastColorChange();
    gl_FragColor = RGBblend();
}


