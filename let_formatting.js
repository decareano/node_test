'use strict';


const {
  isAnyArrayBuffer,
  isUint8Array
} = process.binding('util');




let newBuf;
{


                                      if (isUint8Array(value)) {  //refack: will a value for `newBuf` be, say, 
                                        //0x74, 0x65, 0x73, 0x74]? then in debugger I use this:
                                        //./node --inspect-brk -e "debugger;Buffer.from([0x74, 0x65, 0x73, 0x74])"
                                        const b = allocate(value.length);
                                        if (b.length === 0)
                                        return b;  

                                        _copy(value, b, 0, 0, value.length);
                                        return b; 
                                      }

                                    
}