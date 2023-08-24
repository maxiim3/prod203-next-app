# Components Structure Documentation

```txt
./components
├── atom
├── layout
├── molecule
├── organism
└── ui
```

We use an updated version of the Atomic Design.
- Layout is added as it contains Atoms that a responsible for laying out elements or stacks. 
They are not complex and take child as a prop.
- UI is a mix of Page + Template : It represents stand-alone elements responsible for the UI overall layout. it can be static element on all pages or complex component that are composed by multiple organisms.
