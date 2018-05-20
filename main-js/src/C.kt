class C(val doubleVal: Double) : Number() {

    override fun toByte(): Byte = doubleVal.toByte()
    override fun toChar(): Char = doubleVal.toChar()
    override fun toDouble(): Double = doubleVal.toDouble()
    override fun toFloat(): Float = doubleVal.toFloat()
    override fun toInt(): Int = doubleVal.toInt()
    override fun toLong(): Long = doubleVal.toLong()
    override fun toShort(): Short = doubleVal.toShort()

}
