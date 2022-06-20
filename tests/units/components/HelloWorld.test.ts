import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import HelloWorld from '../../../src/components/HelloWorld.vue';

describe('HelloWorld.vue', function () {
  it('check props string passed to component', () => {
    const wrapper = mount(HelloWorld, { props: { msg: 'a message test' } });

    expect(wrapper.text()).toContain('a message test');
  });
});
