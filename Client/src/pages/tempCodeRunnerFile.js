<SubMenu key='1' title={<span className='h6'><DollarOutlined/> Price</span>}>
                        <div>
                            <Slider className='ml-4 mr-4'
                            tipFormatter={(v)=>`Rs${v}`}
                            range
                            value={price}
                            onChange={handleSlider}
                            max='150000'
                            />
                        </div>
                    </SubMenu>