const Settings = ({ color = '#1C1C1C' }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='21'
      height='20'
      viewBox='0 0 21 20'
      fill='none'
    >
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.5 6.875C9.6712 6.875 8.87634 7.20424 8.29029 7.79029C7.70424 8.37634 7.375 9.1712 7.375 10C7.375 10.8288 7.70424 11.6237 8.29029 12.2097C8.87634 12.7958 9.6712 13.125 10.5 13.125C11.3288 13.125 12.1237 12.7958 12.7097 12.2097C13.2958 11.6237 13.625 10.8288 13.625 10C13.625 9.1712 13.2958 8.37634 12.7097 7.79029C12.1237 7.20424 11.3288 6.875 10.5 6.875ZM8.625 10C8.625 9.50272 8.82254 9.02581 9.17417 8.67417C9.52581 8.32254 10.0027 8.125 10.5 8.125C10.9973 8.125 11.4742 8.32254 11.8258 8.67417C12.1775 9.02581 12.375 9.50272 12.375 10C12.375 10.4973 12.1775 10.9742 11.8258 11.3258C11.4742 11.6775 10.9973 11.875 10.5 11.875C10.0027 11.875 9.52581 11.6775 9.17417 11.3258C8.82254 10.9742 8.625 10.4973 8.625 10Z'
        fill={color}
      />
      <path
        fillRule='evenodd'
        clipRule='evenodd'
        d='M10.4788 1.04199C10.108 1.04199 9.79882 1.04199 9.54548 1.05866C9.28654 1.06944 9.03115 1.12294 8.78965 1.21699C8.51153 1.33207 8.25879 1.5008 8.04589 1.71356C7.83298 1.92633 7.66408 2.17894 7.54882 2.45699C7.42798 2.74866 7.39548 3.05699 7.38215 3.39199C7.38082 3.51451 7.34838 3.63468 7.28789 3.74123C7.2274 3.84778 7.14084 3.93722 7.03632 4.00116C6.92872 4.05991 6.80795 4.09035 6.68536 4.08962C6.56277 4.08889 6.44237 4.05702 6.33548 3.99699C6.03882 3.84033 5.75548 3.71449 5.44215 3.67283C5.14377 3.63358 4.84058 3.65349 4.5499 3.73141C4.25921 3.80934 3.98672 3.94376 3.74798 4.12699C3.54613 4.28939 3.37241 4.48394 3.23382 4.70283C3.09215 4.91449 2.93715 5.18199 2.75215 5.50283L2.73132 5.53949C2.54548 5.86033 2.39132 6.12783 2.27965 6.35616C2.16298 6.59449 2.07132 6.82949 2.03798 7.08949C1.95848 7.69198 2.12155 8.30138 2.49132 8.78366C2.68382 9.03449 2.93465 9.21699 3.21798 9.39533C3.32362 9.45778 3.41162 9.54607 3.47373 9.65191C3.53583 9.75775 3.56999 9.87765 3.57298 10.0003C3.56999 10.123 3.53583 10.2429 3.47373 10.3487C3.41162 10.4546 3.32362 10.5429 3.21798 10.6053C2.93465 10.7837 2.68465 10.9662 2.49132 11.217C2.30808 11.4557 2.17366 11.7282 2.09574 12.0189C2.01781 12.3096 1.9979 12.6128 2.03715 12.9112C2.07132 13.1712 2.16215 13.4062 2.27882 13.6445C2.39132 13.8728 2.54548 14.1403 2.73132 14.4612L2.75215 14.4978C2.93715 14.8187 3.09215 15.0862 3.23382 15.2978C3.38132 15.517 3.53965 15.7145 3.74798 15.8728C3.98666 16.0562 4.25912 16.1908 4.54981 16.2688C4.8405 16.3469 5.14372 16.367 5.44215 16.3278C5.75548 16.2862 6.03882 16.1612 6.33548 16.0037C6.44225 15.9437 6.5625 15.9119 6.68495 15.9111C6.80739 15.9104 6.92801 15.9408 7.03548 15.9995C7.14058 16.0629 7.22769 16.1522 7.28852 16.2588C7.34935 16.3655 7.38187 16.4859 7.38298 16.6087C7.39548 16.9437 7.42798 17.252 7.54965 17.5437C7.66472 17.8218 7.83346 18.0745 8.04622 18.2874C8.25898 18.5003 8.5116 18.6692 8.78965 18.7845C9.03132 18.8845 9.28132 18.9237 9.54548 18.9412C9.79882 18.9587 10.108 18.9587 10.4788 18.9587H10.5205C10.8913 18.9587 11.2005 18.9587 11.4538 18.942C11.7188 18.9237 11.968 18.8845 12.2097 18.7837C12.4878 18.6686 12.7405 18.4998 12.9534 18.2871C13.1663 18.0743 13.3352 17.8217 13.4505 17.5437C13.5713 17.252 13.6038 16.9437 13.6172 16.6087C13.6183 16.486 13.6507 16.3657 13.7112 16.2589C13.7717 16.1522 13.8583 16.0627 13.963 15.9987C14.0707 15.94 14.1915 15.9097 14.314 15.9106C14.4366 15.9115 14.557 15.9435 14.6638 16.0037C14.9605 16.1603 15.2438 16.2862 15.5572 16.327C16.1596 16.4065 16.769 16.2434 17.2513 15.8737C17.4597 15.7137 17.618 15.517 17.7655 15.2978C17.9072 15.0862 18.0622 14.8187 18.2472 14.4978L18.268 14.4612C18.4538 14.1403 18.608 13.8728 18.7197 13.6445C18.8363 13.4062 18.928 13.1703 18.9613 12.9112C19.0408 12.3087 18.8778 11.6993 18.508 11.217C18.3155 10.9662 18.0647 10.7837 17.7813 10.6053C17.6757 10.5429 17.5877 10.4546 17.5256 10.3487C17.4635 10.2429 17.4293 10.123 17.4263 10.0003C17.4263 9.76866 17.553 9.53866 17.7813 9.39533C18.0647 9.21699 18.3147 9.03449 18.508 8.78366C18.6912 8.54492 18.8256 8.27243 18.9036 7.98175C18.9815 7.69106 19.0014 7.38787 18.9622 7.08949C18.9225 6.83342 18.8408 6.58564 18.7205 6.35616C18.5782 6.07928 18.4273 5.80693 18.268 5.53949L18.2472 5.50283C18.0949 5.23123 17.9343 4.96444 17.7655 4.70283C17.6269 4.48417 17.4532 4.2899 17.2513 4.12783C17.0126 3.94444 16.7402 3.80988 16.4495 3.73181C16.1588 3.65374 15.8556 3.63369 15.5572 3.67283C15.2438 3.71449 14.9605 3.83949 14.6638 3.99699C14.557 4.05687 14.4368 4.08866 14.3144 4.08939C14.1919 4.09012 14.0713 4.05976 13.9638 4.00116C13.859 3.93742 13.7721 3.84807 13.7113 3.74151C13.6505 3.63494 13.6178 3.51467 13.6163 3.39199C13.6038 3.05699 13.5713 2.74866 13.4496 2.45699C13.3346 2.17887 13.1658 1.92614 12.9531 1.71323C12.7403 1.50033 12.4877 1.33142 12.2097 1.21616C11.968 1.11616 11.718 1.07699 11.4538 1.05949C11.2005 1.04199 10.8913 1.04199 10.5205 1.04199H10.4788ZM9.26798 2.37116C9.33215 2.34449 9.42965 2.32033 9.63048 2.30616C9.83632 2.29199 10.103 2.29199 10.4997 2.29199C10.8963 2.29199 11.163 2.29199 11.3688 2.30616C11.5697 2.32033 11.6671 2.34449 11.7313 2.37116C11.9872 2.47699 12.1896 2.67949 12.2955 2.93533C12.3288 3.01533 12.3563 3.14116 12.3672 3.43866C12.3921 4.09866 12.733 4.73449 13.338 5.08366C13.943 5.43366 14.6638 5.41033 15.248 5.10199C15.5113 4.96283 15.6338 4.92366 15.7205 4.91283C15.9943 4.87665 16.2713 4.95068 16.4905 5.11866C16.5455 5.16116 16.6155 5.23366 16.728 5.40033C16.8438 5.57199 16.9771 5.80283 17.1755 6.14616C17.3738 6.48949 17.5063 6.72116 17.5972 6.90616C17.6863 7.08699 17.7138 7.18366 17.7221 7.25283C17.7583 7.52663 17.6843 7.8036 17.5163 8.02283C17.463 8.09199 17.368 8.17866 17.1163 8.33699C16.5563 8.68866 16.1763 9.30199 16.1763 10.0003C16.1763 10.6987 16.5563 11.312 17.1163 11.6637C17.368 11.822 17.463 11.9087 17.5163 11.9778C17.6847 12.197 17.758 12.4737 17.7221 12.7478C17.7138 12.817 17.6855 12.9145 17.5972 13.0945C17.5063 13.2803 17.3738 13.5112 17.1755 13.8545C16.9771 14.1978 16.843 14.4287 16.728 14.6003C16.6155 14.767 16.5455 14.8395 16.4905 14.882C16.2713 15.05 15.9943 15.124 15.7205 15.0878C15.6338 15.077 15.5122 15.0378 15.248 14.8987C14.6646 14.5903 13.943 14.567 13.338 14.9162C12.733 15.2662 12.3921 15.902 12.3672 16.562C12.3563 16.8595 12.3288 16.9853 12.2955 17.0653C12.2431 17.1918 12.1664 17.3068 12.0696 17.4036C11.9728 17.5004 11.8578 17.5771 11.7313 17.6295C11.6671 17.6562 11.5697 17.6803 11.3688 17.6945C11.163 17.7087 10.8963 17.7087 10.4997 17.7087C10.103 17.7087 9.83632 17.7087 9.63048 17.6945C9.42965 17.6803 9.33215 17.6562 9.26798 17.6295C9.14149 17.5771 9.02655 17.5004 8.92974 17.4036C8.83294 17.3068 8.75617 17.1918 8.70382 17.0653C8.67048 16.9853 8.64298 16.8595 8.63215 16.562C8.60715 15.902 8.26632 15.2662 7.66132 14.917C7.05632 14.567 6.33548 14.5903 5.75132 14.8987C5.48798 15.0378 5.36548 15.077 5.27882 15.0878C5.00501 15.124 4.72805 15.05 4.50882 14.882C4.45382 14.8395 4.38382 14.767 4.27132 14.6003C4.11458 14.3563 3.96534 14.1076 3.82382 13.8545C3.62548 13.5112 3.49298 13.2795 3.40215 13.0945C3.31298 12.9137 3.28548 12.817 3.27715 12.7478C3.24097 12.474 3.31501 12.1971 3.48298 11.9778C3.53632 11.9087 3.63132 11.822 3.88298 11.6637C4.44298 11.312 4.82298 10.6987 4.82298 10.0003C4.82298 9.30199 4.44298 8.68866 3.88298 8.33699C3.63132 8.17866 3.53632 8.09199 3.48298 8.02283C3.31501 7.8036 3.24097 7.52663 3.27715 7.25283C3.28548 7.18366 3.31382 7.08616 3.40215 6.90616C3.49298 6.72032 3.62548 6.48949 3.82382 6.14616C4.02215 5.80283 4.15632 5.57199 4.27132 5.40033C4.38382 5.23366 4.45382 5.16116 4.50882 5.11866C4.72805 4.95068 5.00501 4.87665 5.27882 4.91283C5.36548 4.92366 5.48715 4.96283 5.75132 5.10199C6.33465 5.41033 7.05632 5.43366 7.66132 5.08366C8.26632 4.73449 8.60715 4.09866 8.63215 3.43866C8.64298 3.14116 8.67048 3.01533 8.70382 2.93533C8.80965 2.67949 9.01215 2.47699 9.26798 2.37116Z'
        fill={color}
      />
    </svg>
  );
};

export default Settings;
