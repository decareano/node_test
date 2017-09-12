const {
  isAnyArrayBuffer,
  isUint8Array
} = process.binding('util');


let newBuf;
{

                                      if (isUint8Array(obj)) {
                                        const b = allocate(obj.length);
                                        if (b.length === 0)
                                        return b;

                                        _copy(obj, b, 0, 0, obj.length);
                                        return b;
                                      }

                                      if (obj.length !== undefined || isAnyArrayBuffer(obj.buffer)) {
                                        if (typeof obj.length !== 'number' || obj.length !== obj.length) {

                                          return new FastBuffer();
                                        }
                                          return fromArrayLike(obj);
                                        }
                                     
                                      if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
                                          return fromArrayLike(obj.data);
                                      }
};