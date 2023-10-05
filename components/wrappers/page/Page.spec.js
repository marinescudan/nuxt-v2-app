// Page.spec.js
import { mount } from '@vue/test-utils';
import Page from './Page.vue';

describe('Page', () => {
  it('renders a title when passed a prop', () => {
    const title = 'Hello, World!';
    const wrapper = mount(Page, {
      propsData: { 
        pageTitle: title
      }
    });

    // Assert that the rendered component contains the message
    expect(wrapper.text()).toContain(title);
  });
});