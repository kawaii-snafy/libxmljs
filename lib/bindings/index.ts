
    /**
     * This file was auto-generated by swig2ts.js
     */
    
    import {XMLReferenceType, NativeBindings} from "./types";
    import * as getBindings from "bindings";
    
    const bindings = getBindings('xmljs');

    const refMap = new WeakMap();

    export function createXMLReference<T>(constructorFn: new (_ref: XMLReferenceType) => T, _ref: any): T {
        if (_ref === null) {
            return new constructorFn(_ref);
        }

        let instance = refMap.get(_ref);

        if (!instance) {
            instance = new constructorFn(_ref);

            refMap.set(_ref, instance);
        }

        return instance;
    };

    export class XMLReference<T> {
        private _ref: T | null;
    
        constructor(_ref: T) {
            this._ref = _ref;
        }
    
        public getSelfOrThrow(error: string) {
            if (this._ref === null) {
                throw new Error(error);
            }
    
            return this;
        }
    
        public getSelfOrNull() {
            if (this._ref === null) {
                return null;
            }
    
            return this;
        }
    
        public isNull(): boolean {
            return (this._ref === null);
        }
    
        public getNativeReference(): T | null {
            return this._ref;
        }
    
        public getNativeReferenceOrReturnNull<returnType>(callback: (_ref: T) => returnType): returnType | null {
            if (this._ref !== null) {
                return callback(this._ref);
            }
    
            return null;
        }
    
        public getNativeReferenceOrThrow(error: string): T {
            if (this._ref === null) {
                throw new Error(error);
            }
    
            return this._ref;
        }
    
        protected setNativeReference(ref: T): void {
            this._ref = ref;
    
            refMap.set(ref as Object, this);
        }
    };
    
    export default bindings;
    