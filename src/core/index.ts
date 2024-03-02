import {IJsSelfProfilingJSON} from '../types/js-self-profiling';
import {transformSamplesToFlameJsAdaptor} from './transformStackToFlameChart';
import {transformSamplesToStack} from './transformSamplesToStack';

export default function flameGraphAdaptor(sourceData: IJsSelfProfilingJSON) {
    // 做一层深拷贝，因为没有复杂数据，所以直接用这个方法进行
    sourceData = JSON.parse(JSON.stringify(sourceData));
    const {samples: sourceDataWithStack} = transformSamplesToStack(sourceData);
    console.log('sourceDataWithStack', sourceDataWithStack);

    const ans = transformSamplesToFlameJsAdaptor(sourceDataWithStack);
    // console.log(ans);
    return ans;
}
